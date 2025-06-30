import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "@/providers/UsersProvider";
import { UserContextType } from "@/providers/types";
import { Col, MainDiv, Row } from "./styles";
import { getMyOrders } from "@/apis/usersApis";
import ProfileOrderBikeCard from "../ProfileOrderBikeCard";
import { HeaderParagraph, HeaderTitle } from "../EditProfile/styles";
import withUserAuth from "@/hocs/withUserAuth";

const OrdersHistory = () => {
  const router = useRouter();
  const { selectedUser } = useUser() as UserContextType;
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (selectedUser) {
      getMyOrders().then((orders) => {
        if (orders) {
          setOrders(orders.data);
        } else {
          setOrders([]);
        }
      });
    }
  }, [selectedUser]);

  return (
    <MainDiv>
      <Row>
        <Col>
          <HeaderTitle>My Orders</HeaderTitle>
        </Col>
      </Row>
      {orders && orders?.length ? (
        <div>
          {orders.map((order:any, index) => (
            <div key={index}>
              <ProfileOrderBikeCard
                bike={order.bike}
                priority={index === 0}
                order={order}
              />
            </div>
          ))}
        </div>
      ) : (
        <h4>No Orders</h4>
      )}
    </MainDiv>
  );
};

export default withUserAuth(OrdersHistory);
