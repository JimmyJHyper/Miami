import LoginModal from "@/components/Admin/LoginModal/loginModal";
import { getImageSize, loginApi } from "./adminApis";
import AlertMessage from "@/components/Alerts/AlertMessage";
import { Password } from "@mui/icons-material";
import { Coupon } from '../types/admin/admin';
import { json } from 'stream/consumers';


const baseApiUrl = process.env.NEXT_PUBLIC_BASE_API_URL;
const emptyCoupon = {
  data:{
    percentage:0,
    code:""
  }
}
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

export const getAllCouponsApi = (): Promise<any> => {
  const token = localStorage.getItem("SESSION_ID");
  return fetch(`${baseApiUrl}/coupon/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.status === 200) return res.json()

    
    
    else throw new Error("Failed to get all coupons");
  });
};

export const getCouponByIdApi = (id: number) => {
  const token = localStorage.getItem("SESSION_ID");
  return fetch(`${baseApiUrl}/coupon/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.status === 200) return res.json();
    else throw new Error("Failed to get coupon");
  });
};

export const changeCouponStatus = (userId: number, type: number) => {
  return true;
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
export const deleteCoupon = (bannerId: number, type: number) => {
  return true;
  const token = localStorage.getItem("SESSION_ID");

  return fetch(`${baseApiUrl}/coupon/delete/${bannerId}`, {
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

export const updateCoupon = async (
  id: number,
  body: any,
 
) => {
  const token = localStorage.getItem("SESSION_ID");
 
  

  return fetch(`${baseApiUrl}/coupon/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
     "Content-Type": "application/json; charset=utf-8"
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
      }

    
      else if (res.status == 401) loginError();
      else {
        AlertMessage({
          type: "error",
          message: "Error",
        });
        throw new Error(`Failed to update  ${id}.`);
      }
    })
    .then((data)=>{console.log("response" +  data)})
    .catch((e) => {});
    
};
export const createCoupon = async (
  body: any,
  
) => {
  const token = localStorage.getItem("SESSION_ID");
  
  
  return fetch(`${baseApiUrl}/coupon/create`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json; charset=utf-8"
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

export const LockCoupon = (couponId: number, type: number) => {
  const token = localStorage.getItem("SESSION_ID");

  return fetch(`${baseApiUrl}/coupon/lock/${couponId}`, {
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

export const deleteCouponAPI = (userId: number, type: number) => {
  const token = localStorage.getItem("SESSION_ID");

  return fetch(`${baseApiUrl}/coupon/delete/${userId}`, {
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
export const getCouponByName = async (
  code:string
 
) => {
  const token = localStorage.getItem("SESSION_ID");
 
  

  return await fetch(`${baseApiUrl}/coupon/getByCode/${code}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
     
    }}).then( async (res)=>{if (!res.ok) {
    return emptyCoupon
  }
return await res.json()
  
   
})
}
 
  



    
  
  
  