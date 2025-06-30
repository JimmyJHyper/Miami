import React, { useState } from "react";
import {
  ContainerDiv,
  LeftMenu,
  LeftMenuHeader,
  LeftMenuItem,
  RightMenu,
} from "./styles";
import { Dashboard, Person } from "@mui/icons-material";
import { FaHistory } from "react-icons/fa";
import EditProfile from "../EditProfile";
import OrdersHistory from "../OrdersHistory";
import { useUser } from "@/providers/UsersProvider";
import { UserContextType } from "@/providers/types";
import ProfilePortalWelcome from "../ProfilePortalWelcome";
import withUserAuth from "@/hocs/withUserAuth";

const ProfilePage = () => {
  const [menuIndex, setMenuIndex] = useState<number>(0);
  const { selectedUser } = useUser() as UserContextType;

  return (
    <ContainerDiv>
      <LeftMenu>
        <LeftMenuHeader>{selectedUser?.firstName} {selectedUser?.lastName}</LeftMenuHeader>
        <LeftMenuItem active={menuIndex === 0} onClick={() => setMenuIndex(0)}>
          <Dashboard style={{ marginRight: "0.6rem" }} />
          Welcome
        </LeftMenuItem>
        <LeftMenuItem active={menuIndex === 1} onClick={() => setMenuIndex(1)}>
          <Person style={{ marginRight: "0.6rem" }} />
          My rider info
        </LeftMenuItem>
        <LeftMenuItem active={menuIndex === 2} onClick={() => setMenuIndex(2)}>
          <FaHistory style={{ marginRight: "0.6rem" }} />
          My bookings
        </LeftMenuItem>
      </LeftMenu>
      <RightMenu>
        {menuIndex === 0 && <ProfilePortalWelcome />}
        {menuIndex === 1 && <EditProfile />}
        {menuIndex === 2 && <OrdersHistory />}
      </RightMenu>
    </ContainerDiv>
  );
};

export default withUserAuth(ProfilePage);
