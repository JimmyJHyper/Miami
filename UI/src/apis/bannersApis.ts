import LoginModal from "@/components/Admin/LoginModal/loginModal";
import { getImageSize, loginApi } from "./adminApis";
import AlertMessage from "@/components/Alerts/AlertMessage";
import { Password } from "@mui/icons-material";
const baseApiUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

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

export const getAllBannersApi = (): Promise<any> => {
  const token = localStorage.getItem("SESSION_ID");
  return fetch(`${baseApiUrl}/banners`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.status === 200) return res.json();
    else throw new Error("Failed to get all banners");
  });
};

export const getBannerByIdApi = (id: number) => {
  const token = localStorage.getItem("SESSION_ID");
  return fetch(`${baseApiUrl}/banners/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.status === 200) return res.json();
    else throw new Error("Failed to get banner");
  });
};

export const changeBannerStatus = (userId: number, type: number) => {
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
export const deleteBanner = (bannerId: number, type: number) => {
  return true;
  const token = localStorage.getItem("SESSION_ID");

  return fetch(`${baseApiUrl}/banner/delete/${bannerId}`, {
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

export const updateBanner = async (
  id: number,
  body: any,
  file: File | undefined = undefined,
  fileSmall: File | undefined = undefined
) => {
  const token = localStorage.getItem("SESSION_ID");
  const formData = new FormData();
  formData.append("banner", JSON.stringify(body));
  if (file) {
    formData.append("imageFile", file);
    let dimension = { width: 0, height: 0 };
    await getImageSize(file).then((di) => {
      dimension = di;
    });
    const info = {
      width: dimension.width,
      height: dimension.height,
      filesize: file.size,
      mimeType: file.type,
      filename: file.name,
      title: file.name,
      alt: body.altText,
      type: "image",
    };

    formData.append("imageData", JSON.stringify(info));
  }

  if (fileSmall) {
    formData.append("imageSmallFile", fileSmall);
    let dimension = { width: 0, height: 0 };
    await getImageSize(fileSmall).then((di) => {
      dimension = di;
    });
    const info = {
      width: dimension.width,
      height: dimension.height,
      filesize: fileSmall.size,
      mimeType: fileSmall.type,
      filename: fileSmall.name,
      title: fileSmall.name,
      alt: body.altText,
      type: "image",
    };

    formData.append("imageSmallData", JSON.stringify(info));
  }
  
  

  return fetch(`${baseApiUrl}/banners/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
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
        throw new Error(`Failed to update Banner ${id}.`);
      }
    })
    .catch((e) => {});
};
export const createBanner = async (
  body: any,
  file: any,
  fileSmall: any
) => {
  const token = localStorage.getItem("SESSION_ID");
  const formData = new FormData();
  if (file) {
    formData.append("imageFile", file);
    formData.append("banner", JSON.stringify(body));
    let dimension = { width: 0, height: 0 };
    await getImageSize(file).then((di) => {
      dimension = di;
    });
    const info = {
      width: dimension.width,
      height: dimension.height,
      filesize: file.size,
      mimeType: file.type,
      filename: file.name,
      title: file.name,
      alt: body.altText,
      type: "image",
    };

    formData.append("imageData", JSON.stringify(info));
  }

  if (fileSmall) {
    formData.append("imageSmallFile", fileSmall);
    let dimension = { width: 0, height: 0 };
    await getImageSize(fileSmall).then((di) => {
      dimension = di;
    });
    const info = {
      width: dimension.width,
      height: dimension.height,
      filesize: fileSmall.size,
      mimeType: fileSmall.type,
      filename: fileSmall.name,
      title: fileSmall.name,
      alt: body.altText,
      type: "image",
    };

    formData.append("imageSmallData", JSON.stringify(info));
  }
  return fetch(`${baseApiUrl}/banners/create`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
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

export const LockBanner = (bannerId: number, type: number) => {
  const token = localStorage.getItem("SESSION_ID");

  return fetch(`${baseApiUrl}/banners/lock/${bannerId}`, {
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

export const deleteBannerAPI = (userId: number, type: number) => {
  const token = localStorage.getItem("SESSION_ID");

  return fetch(`${baseApiUrl}/banners/delete/${userId}`, {
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
