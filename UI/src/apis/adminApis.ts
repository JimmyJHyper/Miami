import LoginModal from "@/components/Admin/LoginModal/loginModal";
import AlertMessage from "@/components/Alerts/AlertMessage";
import { BikeType, UpdateInsurancePayload } from "@/types";
import { BasePricePayload } from "@/types/admin/admin";

const baseApiUrl = process.env.NEXT_PUBLIC_BASE_API_URL;


type LoginBody = {
  username: string;
  password: string;
};

const loginError = () => {
  // AlertMessage({
  //   type: "error",
  //   message: "Login Session Expired Please login",
  // });

  LoginModal((username: string,
    password: string) => {
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
          loginError()
        }
      })
      .catch((err) => {
        localStorage.clear();
        loginError()
      });
  });


}

export const loginApi = (body: LoginBody) => {
  return fetch(`${baseApiUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => {
    if (res.status === 200) return res.json();

    else {
      AlertMessage({
        type: "error",
        message: "Error"
      });
      throw new Error(
        "Failed to login, please provide correct username and password."
      );
    }

  });
};

export const getInsuranceListApi = (bikeId: number) => {
  return fetch(`${baseApiUrl}/bikes/${bikeId}/insurances`).then((res) => {
    if (res.status === 200) return res.json();
    else if (res.status === 401) loginError();
    else {
      AlertMessage({
        type: "error",
        message: "Error"
      });
      throw new Error(`Failed to get insurance list with bikeId ${bikeId}`);
    }
  });
};

export const getAllBikes = () => {
  return fetch(`${baseApiUrl}/bikes`);
};

export const updateInsuranceByIdApi = (
  body: UpdateInsurancePayload,
  bikeId: number,
  insuranceId: number
) => {
  const token = localStorage.getItem("SESSION_ID");
  return fetch(`${baseApiUrl}/bikes/${bikeId}/insurance/${insuranceId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  }).then((res) => {
    if (res.status === 200) return res.json();
    else if (res.status === 401) loginError();
    else {
      AlertMessage({
        type: "error",
        message: "Error"
      });
      throw new Error(
        `Failed to update insurance with BikeId ${bikeId}, InsuranceId ${insuranceId}.`
      );
    }

  });
};

export const updateBasePrice = (bikeId: number, body: BasePricePayload) => {
  const token = localStorage.getItem("SESSION_ID");
  return fetch(`${baseApiUrl}/bikes/${bikeId}/change_base_price`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  }).then((res) => {
    if (res.status === 200) {
      AlertMessage({
        type: "success",
        message: "Done",
      });
      return res.json();
    }
    else if (res.status === 401) loginError();
    else {
      AlertMessage({
        type: "error",
        message: "Error"
      });
      throw new Error(`Failed to update Base Price with BikeId ${bikeId}.`);
    }
  });
};

export const deleteCarouselImage = (id: number) => {
  const token = localStorage.getItem("SESSION_ID");
  return fetch(`${baseApiUrl}/bikes/${id}/deleteCarouselImage`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.status === 200) {
      return true
    }
    else if (res.status === 401) loginError();
    else {
      AlertMessage({
        type: "error",
        message: "Error"
      });
      throw new Error(`Failed to delete image.`);
    }
  });
};

export const uploadCarouselImage = (id: number, imageFile: File) => {
  const token = localStorage.getItem("SESSION_ID");
  const formData = new FormData();
  formData.append("image", imageFile);

  return fetch(`${baseApiUrl}/bikes/${id}/uploadCarouselImage`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  })
    .then((res) => {
      if (res.status === 200) {
        return true;
      }
      else if (res.status === 401) loginError();
      else {
        AlertMessage({
          type: "error",
          message: "Error"
        });
        throw new Error(`Failed to upload image.`);
      }
    });
};

export const updateBikeInfo = (bikeId: number, body: any) => {
  const token = localStorage.getItem("SESSION_ID");
  return fetch(`${baseApiUrl}/bikes/${bikeId}/update_bike_info`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  }).then((res) => {
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
        message: "Error"
      });
      throw new Error(`Failed to update Base Price with BikeId ${bikeId}.`);
    }
  }).catch(e => {

  });
};

export const createBike = (body: any) => {
  const token = localStorage.getItem("SESSION_ID");
  return fetch(`${baseApiUrl}/bikes/create_new_bike`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  }).then((res) => {
    if (res.status === 200) return res.json();
    else if (res.status === 401) loginError();
    else throw new Error(`Failed to Create new Bike.`);
  });
};

export const createBikeInsurance = (body: any, bikeId: Number) => {
  const token = localStorage.getItem("SESSION_ID");
  return fetch(`${baseApiUrl}/bikes/${bikeId}/insurance`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  }).then((res) => {
    if (res.status === 200) return res.json();
    else if (res.status === 401) loginError();
    else throw new Error(`Failed to Create new Insurace.`);
  });
};

export const deleteInsurace = (id: Number) => {
  const token = localStorage.getItem("SESSION_ID");

  return fetch(`${baseApiUrl}/bikes/insurance/delete/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.status === 200) {
      AlertMessage({
        type: "success",
        message: "Done"
      });
      return true;
    }
    else if (res.status === 401) loginError();
    else AlertMessage({
      type: "error",
      message: "Error"
    });
  }).catch(e => {

  });
}

export const hardDeleteBike = (BikeId: Number) => {
  const token = localStorage.getItem("SESSION_ID");

  return fetch(`${baseApiUrl}/bikes/hard/delete/${BikeId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.status === 200) {
      AlertMessage({
        type: "success",
        message: "Done"
      });
      return true;
    }
    else if (res.status === 401) loginError();
    else AlertMessage({
      type: "error",
      message: "Error"
    });
  }).catch(e => {

  });
}

export const getAllAdminBrandsApi = () => {
  return fetch(`${baseApiUrl}/brands?isAll=true`).then((res) => {
    if (res.status === 200) return res.json();
    else throw new Error("Failed to get all bike types");
  });
};

interface ImageSize {
  width: number;
  height: number;
}
export async function getImageSize(file: any): Promise<ImageSize> {
  return new Promise((resolve) => {
    const image = new Image();
    image.src = URL.createObjectURL(file);
    image.onload = () => {
      resolve({ width: image.width, height: image.height });
    };
  });
}

export const updateBikeMainImage = async (bikeId: number, file: any, alt: string, isMainImg: boolean = true) => {
  const token = localStorage.getItem("SESSION_ID");
  const formData = new FormData();
  formData.append('featureImageFile', file)
  let dimension = { width: 0, height: 0 }
  await getImageSize(file).then(di => {
    dimension = di
  })
  const info = {
    width: dimension.width,
    height: dimension.height,
    filesize: file.size,
    mimeType: file.type,
    filename: file.name,
    title: file.name,
    alt: alt,
    type: 'image'
  }

  formData.append('featureImage', JSON.stringify(info))
  return fetch(`${baseApiUrl}/media/create`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  }).then((res) => {
    if (res.status === 200)

      return res.json().then(data => {
        setBikeImage(bikeId, data.data.featuredMediaItem.id, isMainImg).then(res => {

          uploadTransformImages(data.data.featuredMediaItem.id
            , data.data.featuredMediaItem.mediaUrl
            , data.data.featuredMediaItem.filename
            , data.data.featuredMediaItem.mimeType)
        })
        return data.data.featuredMediaItem
      })
    else if (res.status === 401) loginError();




  }).catch(e => {

  });
};


export const uploadTransformImages = (mediaId: number, mediaUr: string, filename: string, mimeType: string) => {
  const token = localStorage.getItem("SESSION_ID");


  const info = {
    featuredImage: {
      id: mediaId,
      mediaUrl: mediaUr,
      filename: filename,
      mimeType: mimeType,
    }
  }

  return fetch(`${baseApiUrl}/media/transform`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(info),
  }).then((res) => {
    if (res.status === 200)
      return true;
    else if (res.status === 401) loginError();

  }).catch(e => {

  });
};

export const setBikeImage = (bikeId: Number, imageId: number, isMainImg: boolean = true) => {
  const token = localStorage.getItem("SESSION_ID");
  const body = { imgId: imageId }
  return fetch(`${baseApiUrl}/bikes/${bikeId}/${imageId}/` + (isMainImg ? 'setBikeImageMainId' : 'setBikeCarouselImageId'), {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  }).then((res) => {
    if (res.status === 200) {
      AlertMessage({
        type: "success",
        message: "Done"
      });
      return true;
    }
    else if (res.status === 401) loginError();
    else AlertMessage({
      type: "error",
      message: "Error"
    });

  }).catch(e => {

  });
}

export const updateBikeDiscounts = (bikeId: number, body: object) => {
  const token = localStorage.getItem("SESSION_ID");
  const bod = JSON.stringify({ discountPercentage: JSON.stringify(body) })

  return fetch(`${baseApiUrl}/bikes/${bikeId}/updateBikeDiscounts`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: bod,
  }).then((res) => {
    if (res.status === 200)
      AlertMessage({
        type: "success",
        message: "Done"
      });
    else if (res.status === 401) loginError();
    else AlertMessage({
      type: "error",
      message: "Error"
    });

  }).catch(e => {

  });
}

export const softDeleteBike = (bikeId: number, type: number) => {
  const token = localStorage.getItem("SESSION_ID");

  return fetch(`${baseApiUrl}/bikes/${bikeId}/delete`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type: type })
  }).then((res) => {
    if (res.status === 200) {
      AlertMessage({
        type: "success",
        message: "Done"
      });
      return true;
    }
    else if (res.status === 401) loginError();
    else AlertMessage({
      type: "error",
      message: "Error"
    });
  }).catch(e => {

  });
}


export const updateBikePosition = (positions: { bikeId: number, position: number }[]) => {
  const token = localStorage.getItem("SESSION_ID");
  const bod = JSON.stringify(positions)

  return fetch(`${baseApiUrl}/bikes/position/update`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: bod,
  }).then((res) => {
    if (res.status === 200) {
      AlertMessage({
        type: "success",
        message: "Done"
      });
      return true;
    }
    else if (res.status === 401) loginError();
    else AlertMessage({
      type: "error",
      message: "Error"
    });

  }).catch(e => {
  });
}

export const updateBikeSEO = (bikeId: number, body: any) => {
  const token = localStorage.getItem("SESSION_ID");
  return fetch(`${baseApiUrl}/bikes/${bikeId}/updateBikeSEO`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  }).then((res) => {
    if (res.status === 200)
      AlertMessage({
        type: "success",
        message: "Done"
      });
    else if (res.status === 401) loginError();
    else AlertMessage({
      type: "error",
      message: "Error"
    });;
  });
};


export const updateBikeAltImage = (body: any) => {
  const token = localStorage.getItem("SESSION_ID");
  return fetch(`${baseApiUrl}/media/altImage`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  }).then((res) => {
    if (res.status === 200)
      AlertMessage({
        type: "success",
        message: "Done"
      });
    else if (res.status === 401) loginError();
    else AlertMessage({
      type: "error",
      message: "Error"
    });
  });
};

function createRoot(arg0: HTMLElement) {
  throw new Error("Function not implemented.");
}
