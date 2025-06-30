import {
  verifyEmail,
  requestEmailVerification,
} from "@/apis/usersApis"; // Assuming you have an API to resend
import Swal from "sweetalert2";

type VerifiyFormResult = {
  email: string;
  code: string;
};

let emailInput: HTMLInputElement;
let codeInput: HTMLInputElement;

const EmailVerificationModal = (email: string, callback: Function) => {
  let resendTime = 60;
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

  Swal.fire<VerifiyFormResult>({
    title: "Verify Your Email",
    html: `
      <input type="text" id="email" class="swal2-input" placeholder="Email" readonly value="${email}">
      <input type="password" id="code" class="swal2-input" placeholder="Code">
      <div style="display:flex; justify-content:space-evenly; width:100%;">
      <p id="countdown-text" style="font-size: small;">resend new code in ${resendTime} s.</p>
      <p id="resend-button" disabled style="color:blue;cursor:pointer;font-size: small;">Resend Code</p>
      </div>
    `,
    confirmButtonText: "Verify",
    focusConfirm: false,
    didOpen: () => {
      const popup = Swal.getPopup()!;
      emailInput = popup.querySelector("#email") as HTMLInputElement;
      codeInput = popup.querySelector("#code") as HTMLInputElement;
      const resendButton = document.getElementById("resend-button");

      // Start countdown
      startCountdown();

      // Handle resend code button click
      resendButton!.addEventListener("click", async () => {
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
    },
    preConfirm:async () => {
      const email = emailInput.value;
      const otpCode = codeInput.value;

      if (!email || !otpCode) {
        Swal.showValidationMessage(`Please enter Email and Code`);
        return false;
      } 
      let res = await callback(emailInput.value, codeInput.value);
      
      if(res ==false){
        Swal.showValidationMessage(`Code or Email Error`);
        return false;
      }
      return true
    },
  }).then(async (result) => {
    clearInterval(interval);
  });
};

export default EmailVerificationModal;
