import styled from "styled-components";

export const DivCommentFormContainer = styled.div`
  width: 80%;
  max-width: 1080px;
  margin: auto;
  padding: 5rem 0;
`;
export const H3Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 1.7rem;
  margin-bottom: 1rem;
`;
export const PDescription = styled.p`
  margin-bottom: 1.5rem;
`;
export const TextInputForm = styled.textarea`
  width: 100%;
  min-height: 200px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray3};
`;
export const InputForm = styled.input`
  width: 50%;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray3};
  margin-bottom: 1rem;
  margin-right: 1px;
`;
export const DivButtonWrapper = styled.div`
  text-align: right;
  margin-top: 1rem;
`;
export const ButtonSubmit = styled.button`
  background: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 30px;
  padding: 0.8rem 1.5rem;
`;
