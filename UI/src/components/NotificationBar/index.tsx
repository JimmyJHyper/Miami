import React from "react";
import { FiCheckSquare } from "react-icons/fi";
import { DivNotificationBarContainer } from "./styles";

function NotificationBar() {
  return (
    <DivNotificationBarContainer>
      <FiCheckSquare className="checkbox-icon" />
      <p>Book Longer Trips to Save More With Additional Discounts.</p>
    </DivNotificationBarContainer>
  );
}

export default NotificationBar;
