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
  font-size: 1.8rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding-block: 1.5rem;
    align-self: center;
  }
`;

export const HeaderParagraph = styled.h5`
  padding-bottom: 2rem;
  color: #4f4f4f;
  font-size: 1rem;

  @media (max-width: 768px) {
    padding-bottom: 1.5rem;
    font-size: 0.9rem;
  }
`;

export const Row = styled.div`
  display: flex;
  margin-block: 0.6rem;
  margin-inline: 0.2rem;
  gap: 0.3rem;
  align-items: start;
  width: 100%; /* Ensure row takes full width */
  align-items:end;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-inline: 0;
  }
`;

export const Col = styled.div`
  flex: 1; /* Ensures that all columns take equal space */
  padding-inline: 0.2rem;
  display: flex;
  flex-direction: column;
  width: 100%; /* Ensures the column fills the available width */

  @media (max-width: 768px) {
    flex: 1;
    padding-inline: 0;
  }
`;

export const InputField = styled.input`
  font-weight: 600;
  margin-bottom: 1px;
  font-size: 0.8rem;
  line-height: 2rem;
  width: 100%; /* Ensure input fields take full width */
  box-shadow: inset 0 0 4px 1px #9b9393d9;
  padding: 0.5rem;
  border: 1px solid grey;
  border-radius: 4px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.8rem;
    padding: 0.4rem;
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

export const ButtonSubmit = styled.button`
  width: 100%;
  background: #0070aa;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 3px ${({ theme }) => theme.colors.wizardShadow};
  border: none;
  border-radius: 5px;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 1rem;
  transition: all 0.3s ease-out;
  margin-top: 2rem;
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.green};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem;
    margin-top: 1.5rem;
    margin-bottom: 0.8rem;
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
    border-radius: 4px;

    &:focus {
      color: ${({ theme }) => theme.colors.wizardBlack};
      outline: none;
      border-color: #0070aa;
    }

    @media (max-width: 768px) {
      padding: 0.8rem 1.5rem;
    }
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
