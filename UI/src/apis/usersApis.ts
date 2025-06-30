import LoginModal from "@/components/Admin/LoginModal/loginModal";
import { loginApi } from "./adminApis";
import AlertMessage from "@/components/Alerts/AlertMessage";
import { Password } from "@mui/icons-material";
const baseApiUrl = process.env.NEXT_PUBLIC_BASE_API_URL;
type LoginBody = {
  username: string;
  password: string;
};

type UserRegisterType = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  dateOfBirth: string;
  country: string;
  city: string;
  streetAddress: string;
  aptSuite: string;
  state: string;
  postalCode: string;
};

type UserVerifyType = {
  email: string;
  otpCode: string;
};
const loginError = () => {
  LoginModal((username: string, password: string) => {
    loginApi({ username: username, password: password })
      .then((res) => {
        if (
          res.data.userDetails.isVerified &&
          res.data.userDetails.role === "administrator"
        ) {
          localStorage.setItem("SESSION_ID", res.data.token);
          AlertMessage({
            type: "success",
            message: "You are logged now, Please try saving again",
          });
        } else {
          localStorage.clear();
          loginError();
        }
      })
      .catch((err) => {
        localStorage.clear();
        loginError();
      });
  });
};

export const userLogin = (body: LoginBody) => {
  return fetch(`${baseApiUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(async (res: any) => {
    res = await res.json();
    if (res.status === 200) {
      if (
        res.data.userDetails.isVerified &&
        res.data.userDetails.role === "customer"
      ) {
        localStorage.setItem("SESSION_ID", res.data.token);
        return true;
      }
    } else if (
      res.statusCode === 401 &&
      res.message == "Email is not verified"
    ) {
      if (res.message == "Email is not verified") {
        return res;
      } else {
        return res;
      }
    } else {
      AlertMessage({
        type: "error",
        message: "wrong Email or Password",
      });
    }
  });
};

export const getAllUsersApi = () => {
  const token = localStorage.getItem("SESSION_ID");
  return fetch(`${baseApiUrl}/user/users/all`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.status === 200) return res.json();
    else throw new Error("Failed to get all bike types");
  });
};

export const getuserByIdApi = (id: number) => {
  const token = localStorage.getItem("SESSION_ID");
  return fetch(`${baseApiUrl}/user/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.status === 200) return res.json();
    else throw new Error("Failed to get all bike types");
  });
};

export const LockUser = (userId: number, type: number) => {
  const token = localStorage.getItem("SESSION_ID");

  return fetch(`${baseApiUrl}/user/lock/${userId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type: type }),
  })
    .then((res) => {
      if (res.status === 200) {
        AlertMessage({
          type: "success",
          message: "Done",
        });
        return true;
      } else if (res.status === 401) loginError();
      else
        AlertMessage({
          type: "error",
          message: "Error",
        });
    })
    .catch((e) => {});
};
export const deleteUserAPI = (userId: number, type: number) => {
  const token = localStorage.getItem("SESSION_ID");

  return fetch(`${baseApiUrl}/user/delete/${userId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type: type }),
  })
    .then((res) => {
      if (res.status === 200) {
        AlertMessage({
          type: "success",
          message: "Done",
        });
        return true;
      } else if (res.status === 401) loginError();
      else
        AlertMessage({
          type: "error",
          message: "Error",
        });
    })
    .catch((e) => {});
};

export const updateUserInfo = (id: number, body: any) => {
  const token = localStorage.getItem("SESSION_ID");
  return fetch(`${baseApiUrl}/user/updateUserDetails/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })
    .then((res) => {
      if (res.status == 200) {
        AlertMessage({
          type: "success",
          message: "Done",
        });
        return res.json();
      } else if (res.status == 401) loginError();
      else {
        AlertMessage({
          type: "error",
          message: "Error",
        });
        throw new Error(`Failed to update Base Price with BikeId ${id}.`);
      }
    })
    .catch((e) => {});
};
export const updateMyUserInfo = (body: any) => {
  const token = localStorage.getItem("SESSION_ID");
  return fetch(`${baseApiUrl}/user/updateMyUserDetails`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })
    .then((res) => {
      if (res.status == 200) {
        AlertMessage({
          type: "success",
          message: "Done",
        });
        return res.json();
      } else if (res.status == 401) loginError();
      else {
        AlertMessage({
          type: "error",
          message: "Error",
        });
        throw new Error(`Failed to update User Info.`);
      }
    })
    .catch((e) => {});
};

export const checkToken = () => {
  const token = localStorage.getItem("SESSION_ID");
  return fetch(`${baseApiUrl}/auth/checkToken`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ token: token }),
  })
    .then(async (res) => {
      if (res.status == 200) {
        return await res.json();
      }
      return undefined;
    })
    .catch((e) => {});
};

export const userRegister = (body: UserRegisterType) => {
  return fetch(`${baseApiUrl}/user/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(async (res: any) => {
    if (res.status === 200) {
      res = await res.json();
      return res.data;
    } else {
      AlertMessage({
        type: "error",
        message: "Error",
      });
      throw new Error(
        "Failed to login, please provide correct username and password."
      );
    }
  });
};

export const requestEmailVerification = (userEmail: string) => {
  return fetch(`${baseApiUrl}/user/sendVerificationCode`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userEmail: userEmail }),
  }).then(async (res: any) => {
    if (res.status === 200) {
      res = await res.json();
      return res.data;
    } else {
      AlertMessage({
        type: "error",
        message: "Error",
      });
    }
  });
};

export const verifyEmail = (body: UserVerifyType) => {
  return fetch(`${baseApiUrl}/user/verify`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(async (res: any) => {
    if (res.status === 200) {
      res = await res.json();
      return res.data;
    } else {
      return false;
    }
  });
};

export const getMyOrders = () => {
  const token = localStorage.getItem("SESSION_ID");
  return fetch(`${baseApiUrl}/bike-rental-order/myOrders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ token: token }),
  })
    .then(async (res) => {
      if (res.status == 200) {
        return await res.json();
      }
      return undefined;
    })
    .catch((e) => {});
};

export const confirmForgetPassword = (
  email: string,
  code: string,
  newPassword: string
) => {
  return fetch(`${baseApiUrl}/user/reset-password`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      code,
      password: newPassword,
    }),
  }).then(async (res: any) => {
    res = await res.json();
    return res;
  });
};
export const requestCodeVerification = (
  email: string,
  code: string,
) => {
  return fetch(`${baseApiUrl}/user/verify-reset-password-code`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      code,
    }),
  }).then(async (res: any) => {
    res = await res.json();
    return res;
  });
};
