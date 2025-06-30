import styled from "styled-components";

export const MainDiv = styled.div`
  padding-inline: 1rem;
  padding-bottom: 1rem;
  
  @media (max-width: 768px) {
    padding-inline: 0.5rem;
  }
`;

export const HeaderTitle = styled.h2`
  padding-block: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding-block: 1.5rem;
  }
`;

export const HeaderParagraph = styled.p`
  margin-block: 2rem;
  color: #353535;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-block: 1.5rem;
  }
`;

export const SeperatedDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  height: 70vh;
  margin-top: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 2rem;
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
    padding-block: 2rem;
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
    padding-block: 2rem;
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

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const PParagraph = styled.p`
  font-weight: bold;
  color: grey;
  margin-bottom: 1.7rem;
  font-size: 1rem;
  line-height: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
`;

export const ClickButton = styled.button`
  font-weight: 100;
  color: #dddddd;
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
  background: black;
  padding-block: 0.7rem;
  padding-inline: 1.5rem;
  border-radius: 3px;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding-block: 0.6rem;
    padding-inline: 1rem;
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    margin-bottom: 0.4rem;
  }
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

  @media (max-width: 768px) {
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
    font-size: 0.7rem;
    line-height: 1.8rem;
  }
`;

export const RememberMeDiv = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 0.4rem;
  }
`;

export const RememberLabel = styled.label`
  font-size: 0.7rem;
  color: black;
  font-weight: bolder;

  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

export const ForgotPasswordButton = styled.a`
  color: #009fff;
  font-weight: 600;
  font-size: 0.8rem;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
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

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const Row = styled.div`
  display: flex;
  margin-block: 0.6rem;
  margin-inline: 0.2rem;
  gap: 0.3rem;
  align-items: start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Col = styled.div`
  flex: 0.5;
  padding-inline: 0.2rem;

  @media (max-width: 768px) {
    flex: 1;
    padding-inline: 0;
  }
`;

export const DivInputWrapper = styled.div`
  display: flex;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .text-input {
    width: 100%;
    margin-bottom: 0.5rem;
  }

  textarea.text-input {
    height: 90px;
    padding: 1rem 2rem;
    margin-bottom: 0;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.gray1};
    &:focus {
      color: ${({ theme }) => theme.colors.wizardBlack};
    }

    @media (max-width: 768px) {
      padding: 0.8rem 1.5rem;
    }
  }
`;

export const FormCheckout = styled.form`
  box-shadow: 0 0 0 0.5px #32325d1a, 0 2px 5px #32325d1a, 0 1px 1.5px #00000012;
  padding: 2.5rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const ButtonSubmit = styled.button`
  width: 100%;
  background: #0070aa;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 3px ${({ theme }) => theme.colors.wizardShadow};
  border-radius: 5px;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 1rem;
  transition: all 0.3s ease-out;
  margin-top: 2rem;
  margin-bottom: 1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.green};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem;
  }
`;
