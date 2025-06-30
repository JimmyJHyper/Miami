import styled from "styled-components";

export const DivBookingBarContainer = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.button};
  align-items: center;
  padding: 5px;
  @media screen and (max-width: 640px) {
    padding: 0.5rem 0;
  }
`;
export const DivPrice = styled.div`
  flex: 1;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 1.2rem;
`;
export const DivButtonWrapper = styled.div`
  flex: 1;
  text-align: center;
`;
export const ButtonContinue = styled.button`
  background: ${({ theme }) => theme.colors.pink};
  border-radius: 30px;
  padding: 0.5rem 2rem;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 300;
`;
