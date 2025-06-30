import {
  verifyEmail,
  requestEmailVerification,
  confirmForgetPassword,
} from "@/apis/usersApis"; // Assuming you have an API to resend
import Swal from "sweetalert2";

type ForgetPasswordFormResult = {
  email: string;
  newPassword: string;
  code: string;
};

let emailInput: HTMLInputElement;
let newPasswordInput: HTMLInputElement;
let codeInput: HTMLInputElement;

const ForgetPasswordModal = () => {
  let resendTime = 0;
  let interval: NodeJS.Timeout;

  const startCountdown = () => {
    interval = setInterval(() => {
      resendTime--;
      const resendButton = document.getElementById("resend-button");
      const countdownText = document.getElementById("countdown-text");
      if (resendTime <= 0) {
        clearInterval(interval);
        resendButton!.removeAttribute("disabled");
        countdownText!.textContent = "resend new code";
      } else {
        resendButton!.setAttribute("disabled", "true");
        countdownText!.textContent = `resend new code in ${resendTime} s.`;
      }
    }, 1000);
  };

  Swal.fire<ForgetPasswordFormResult>({
    title: "Reset your Password",
    html: `
      <input type="text" id="email" class="swal2-input" placeholder="Email">
      <input type="text" id="code" class="swal2-input" placeholder="Code">
      <input type="password" id="newPassword" class="swal2-input" placeholder="New Password">
      <div style="display:flex; justify-content:space-evenly; width:100%;">
      <p id="countdown-text" style="font-size: small;">request code in ${resendTime}s.</p>
      <p id="resend-button" style="color:blue;cursor:pointer;font-size: small;">Request Code</p>
      </div>
    `,
    confirmButtonText: "Reset",
    focusConfirm: false,
    didOpen: () => {
      const popup = Swal.getPopup()!;
      emailInput = popup.querySelector("#email") as HTMLInputElement;
      newPasswordInput = popup.querySelector(
        "#newPassword"
      ) as HTMLInputElement;
      codeInput = popup.querySelector("#code") as HTMLInputElement;
      const resendButton = document.getElementById("resend-button");

      // Start countdown
      startCountdown();

      // Handle resend code button click
      resendButton!.addEventListener("click", async () => {
        if (!emailInput.value) return;
        if (resendTime <= 0) {
          resendButton!.setAttribute("disabled", "true");
          resendTime = 60;
          startCountdown();

          try {
            await requestEmailVerification(emailInput.value);
          } catch (error) {
            Swal.fire("Error", "Could not resend verification code.", "error");
          }
        }
      });

      Swal.showValidationMessage(`Please enter email and code`);
      emailInput.onkeyup = (event) =>
        event.key === "Enter" && Swal.clickConfirm();
      codeInput.onkeyup = (event) =>
        event.key === "Enter" && Swal.clickConfirm();
      newPasswordInput.onkeyup = (event) =>
        event.key === "Enter" && Swal.clickConfirm();
    },
    preConfirm: async () => {
      const email = emailInput.value;
      const otpCode = codeInput.value;
      const newPassword = newPasswordInput.value;
      if (!email || !otpCode || !newPassword) {
        Swal.showValidationMessage(
          `Please enter Email and Code and New Password`
        );
        return false;
      }
      let res = await confirmForgetPassword(email, otpCode, newPassword);
      if (res.data) {
        if (res.data === true && res.status === 200) {
          Swal.fire("Done", "Please login with the new password", "success");
          return true;
        } else {
          Swal.showValidationMessage("Email or Code not valid");
          return false;
        }
      } else if (res.statusCode && res.statusCode === 400 && res.message) {
        Swal.showValidationMessage(res.message[0]); // Show error but don't close
        return false; // Prevent modal from closing
      } else {
        Swal.showValidationMessage("Error...");
        return false;
      }
    },
  }).then(async (result) => {
    clearInterval(interval);
  });
};

export default ForgetPasswordModal;
