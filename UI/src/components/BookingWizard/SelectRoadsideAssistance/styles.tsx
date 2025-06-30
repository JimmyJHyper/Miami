import styled from "styled-components";

export const DivDiscountWrapper = styled.div`
  background: ${({ theme }) => theme.colors.opacitySkyBlue};
  border-radius: 5px;
  padding: 1.3rem 1rem;
  display: flex;
`;

export const ButtonDetail = styled.button`
  color: ${({ theme }) => theme.colors.gray1};
  text-decoration: underline;
`;

export const ImgIcon = styled.img`
  margin-right: 1rem;
`;
