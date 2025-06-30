import styled from "styled-components";
import { DivFormWrapper, Divider } from "../common/styles";

export const DivCompletedOrderContainer = styled.div`
  padding: 4rem 1rem;
  text-align: center;

  ${DivFormWrapper} {
    width: 100%;
    padding: 3rem 4rem;
    @media screen and (max-width: 640px) {
      padding: 2rem 1rem;
    }
  }
  ${Divider} {
    margin: 1.5rem 0;
  }
`;
export const DivMainContent = styled.div`
  max-width: 630px;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.wizardBlack};
  text-align: left;
`;
export const DivHeaderSection = styled.div`
  max-width: 350px;
  margin: auto;
  text-align: center;
`;
export const ImgSuccess = styled.img`
  margin-bottom: 1.5rem;
`;
export const H1Title = styled.h1`
  font-size: 1.7rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;
export const PDescription = styled.p`
  line-height: 1.7;
  margin-bottom: 1rem;
`;
export const ImgBike = styled.img`
  width: 100%;
  margin-bottom: 1rem;
`;
export const H3SubTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
`;
export const ButtonTakeHome = styled.button`
  background: ${({ theme }) => theme.colors.lightGreen};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 3px ${({ theme }) => theme.colors.wizardShadow};
  border-radius: 5px;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 1rem 1.5rem;
  transition: all 0.3s ease-out;
  margin-top: 2.5rem;

  &:hover {
    background: ${({ theme }) => theme.colors.green};
  }
`;

export const PSectionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.wizardBlack};
  margin-bottom: 0.5rem;

  &:not(:first-child) {
    margin-top: 1.5rem;
  }

  p {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .section-icon {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.gray1};
  }

  .dropdown-icon {
    cursor: pointer;
    transition: all 0.5s ease;

    &.show {
      transform: rotate(180deg);
    }
  }
`;

export const DivInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.wizardBlack};
  line-height: 1.5;
  text-align: left;

  .info-label {
    font-weight: 700;
    margin-top: 1rem;
  }

  strong {
    color: ${({ theme }) => theme.colors.background2};
    font-weight: 500;
  }
`;

export const SpanAlert = styled.span`
  background: ${({ theme }) => theme.colors.alertGray};
  color: ${({ theme }) => theme.colors.wizardBlack};
  padding: 0.7rem 1.5rem;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 300;
  display: inline-block;
  margin-top: 1rem;
`;

export const DivPriceBar = styled.div<{ hasMargin?: boolean }>`
  display: flex;
  align-items: end;
  justify-content: space-between;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.wizardBlack};
  margin-top: ${({ hasMargin }) => (hasMargin ? "1rem" : 0)};

  p {
    text-transform: capitalize;
  }

  span {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.gray1};
  }

  button {
    color: ${({ theme }) => theme.colors.gray1};
    font-size: 0.7rem;
    text-decoration: underline;
    margin-left: 1rem;
  }
`;

export const DivDropdown = styled.div`
  height: 0;
  overflow: hidden;
  transition: all 0.5s ease;

  &.show {
    height: 250px;
  }
`;
export const ImportantPTag = styled.p`
  color: red;
  line-height: 1.3;
  font-weight: bold;



`;
