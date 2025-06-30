import {
  InitialOrderPayload,
  OnCheckoutPayload,
  OrderPayload,
  StripePaymentPayload,
  StripeRefundPaymentPayload,
  VerifyOrderPayload,
} from "@/types";

const baseApiUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

export const initialOrderApi = (body: InitialOrderPayload) => {
  return fetch(`${baseApiUrl}/bike-rental-order/initial`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => {
    if (res.status === 200 || res.status === 201) return res.json();
    else throw new Error("Failed to initial order.");
  });
};

export const verifyOrderApi = (body: OrderPayload) => {
  return fetch(`${baseApiUrl}/bike-rental-order/${body.orderId}/verify-order`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => {
    if (res.status === 200) return res.json();
    else throw new Error("Failed to verify order.");
  });
};
// export const verifyOrderApi = (body: VerifyOrderPayload, orderId: number) => {
//   return fetch(`${baseApiUrl}/bike-rental-order/${orderId}/verify-order`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   }).then((res) => {
//     if (res.status === 200) return res.json();
//     else throw new Error("Failed to verify order.");
//   });
// };

export const resendVerificationCodeApi = (orderId: number) => {
  return fetch(`${baseApiUrl}/bike-rental-order/${orderId}/resend-code`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  }).then((res) => {
    if (res.status === 200) return res.json();
    else throw new Error("Failed to resend verification code.");
  });
};

export const onCheckoutOrderApi = (
  body: OnCheckoutPayload,
  orderId: number
) => {
  return fetch(`${baseApiUrl}/bike-rental-order/${orderId}/on-checkout`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => {
    if (res.status === 200) return res.json();
    else throw new Error("Failed to checkout order.");
  });
};

export const completeOrderApi = (body: OnCheckoutPayload, orderId: number) => {
  return fetch(`${baseApiUrl}/bike-rental-order/${orderId}/complete-order`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => {
    if (res.status === 200) return res.json();
    else throw new Error("Failed to complete order.");
  });
};

export const stripePaymentApi = (
  body: StripePaymentPayload,
  orderId: number
) => {
  return fetch(`${baseApiUrl}/stripe/${orderId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => {
    if (res.status === 200) return res.json();
    else throw new Error("Failed to pay on stripe.");
  });
};

export const stripeRefundPaymentApi = (body: StripeRefundPaymentPayload) => {
  const token = localStorage.getItem("SESSION_ID");
  return fetch(`${baseApiUrl}/stripe/refund`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  }).then((res) => {
    if (res.status === 200) return res.json();
    else throw new Error("Failed to refund on stripe.");
  });
};

export const getBookedDatesApi = (bikeId: number) => {
  return fetch(`${baseApiUrl}/bike-rental-order/${bikeId}/requested`).then(
    (res) => {
      if (res.status === 200) return res.json();
      else throw new Error(`Failed to get booked dates for bikeId ${bikeId}`);
    }
  );
};

export const getBookedDiscountApi = (bikeId: number) => {
  return fetch(`${baseApiUrl}/bikes/${bikeId}/getDiscountPrices`).then(
    (res) => {
      if (res.status === 200) return res.json();
      else
        throw new Error(`Failed to get booked discounts for bikeId ${bikeId}`);
    }
  );
};
