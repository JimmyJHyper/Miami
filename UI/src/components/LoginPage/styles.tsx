import styled from "styled-components";

export const SeperatedDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  height: 70vh;
  margin-top: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content:center;
    height: auto;
    margin-top: 1rem;
  }
`;

export const RightDiv = styled.div`
  border-left: 1px solid grey;
  flex-direction: column;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-block: 3rem;

  @media (max-width: 768px) {
    border-left: none;
    width: 90%;
    padding-block: 1rem;
  }
`;

export const LeftDiv = styled.div`
  flex-direction: column;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-block: 3rem;

  @media (max-width: 768px) {
    width: 90%;
    padding-block: 1rem;
  }
`;

export const ContainerDiv = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const H2Header = styled.h2`
  font-weight: 800;
  margin-bottom: 0.6rem;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const PParagraph = styled.p`
  font-weight: bold;
  color: grey;
  margin-bottom: 1.7rem;
  font-size: 1rem;
  line-height: 1.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const ClickButton = styled.button`
  background-color: ${({ theme }) => theme.colors.lightGreen};
  text-transform: capitalize;
  font-weight: 700;
  font-size: 1.1rem;
  width: 130px;
  padding: 0.7rem;
  transition: all 0.3s ease-out;

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 100%;
    padding-block: 0.5rem;
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 0.5rem;
`;

export const InputHeaderText = styled.p`
  font-weight: 800;
  color: black;
  margin-bottom: 1px;
  font-size: 0.8rem;
  line-height: 1rem;

  span {
    color: grey;
    font-size: 0.7rem;
  }
`;

export const InputField = styled.input`
  font-weight: 600;
  margin-bottom: 1px;
  font-size: 0.8rem;
  line-height: 2rem;
  width: 100%;
  box-shadow: inset 0 0 4px 1px #9b9393d9;
  padding: 2px;
  border: 1px solid grey;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.8rem;
  }
`;

export const RememberMeDiv = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const RememberLabel = styled.label`
  font-size: 0.7rem;
  color: black;
  font-weight: bolder;
`;

export const ForgotPasswordButton = styled.a`
  color: #009fff;
  font-weight: 600;
  font-size: 0.8rem;
  cursor: pointer;
`;

export const AgreeingText = styled.div`
  color: black;
  font-weight: 600;
  font-size: 0.8rem;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const ErrorDiv = styled.div`
  color: red;
  font-weight: 600;
  font-size: 0.8rem;
`;

export const DivActionBarContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 1rem;
  padding-bottom: 4rem;

  @media (max-width: 768px) {
    padding-bottom: 1rem;
  }

  .next-btn,
  .back-btn {
    background-color: ${({ theme }) => theme.colors.lightGreen};
    text-transform: capitalize;
    font-weight: 700;
    font-size: 1.1rem;
    padding: 0.7rem;
    transition: all 0.3s ease-out;
  }

  .next-btn:hover {
    background-color: ${({ theme }) => theme.colors.green};
  }

  .back-btn {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.gray1};
    border: none;

    &:hover {
      background-color: ${({ theme }) => theme.colors.white};
      box-shadow: 0 1px 3px ${({ theme }) => theme.colors.wizardShadow};
    }
  }
`;