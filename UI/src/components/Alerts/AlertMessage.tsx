import React, { useEffect } from "react";
import Swal from "sweetalert2";

interface AlertMessageProps {
  type: "success" | "error";
  message: string;
  html?: string | null;
}

const AlertMessage: React.FC<AlertMessageProps> = ({ type, message, html = null }) => {
  Swal.fire({
    title: type === "success" ? "Success!" : "Error!",
    text: message,
    icon: type,
    confirmButtonText: "OK",
    html: html ?? ''
  });


  // You can return null because this component doesn't render any UI elements
  return null;
};

export default AlertMessage;
