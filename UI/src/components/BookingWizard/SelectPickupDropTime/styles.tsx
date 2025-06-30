import styled from "styled-components";

export const DivDiscountWrapper = styled.div`
  background: ${({ theme }) => theme.colors.opacitySkyBlue};
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin-bottom: 1.5rem;
  display: flex;

  @media screen and (max-width: 640px) {
    margin-top: -0.5rem;
  }
`;

export const PDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray1};
  margin-bottom: 5px;
`;

export const ButtonDetail = styled.button`
  color: ${({ theme }) => theme.colors.gray1};
  text-decoration: underline;
`;

export const ImgIcon = styled.img`
  margin-right: 1rem;
`;

export const DivDiscountInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.wizardBlack};

  @media screen and (max-width: 768px) {
    div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;

export const SpanCurrentPrice = styled.span`
  font-size: 1.2rem;
`;

export const SpanHelp = styled.span`
  color: ${({ theme }) => theme.colors.green};
  margin-left: 5px;
`;

export const SpanLastPrice = styled.span`
  text-decoration: line-through;
  color: ${({ theme }) => theme.colors.gray1};
`;
