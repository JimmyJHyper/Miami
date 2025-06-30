import styled from "styled-components";

export const DivTypeFilterContainer = styled.div`
  width: 80%;
  max-width: 1080px;
  margin: auto;
  padding: 4rem 0;
`;
export const PLabel = styled.p`
  margin-bottom: 1rem;
`;
export const DivInputWrapper = styled.div`
  display: flex;
  margin-bottom: 3rem;
  .select-input {
    width: 300px;
    background: #eee;
  }
  .MuiSelect-select {
    padding: 0.7rem 1rem;
    a {
      color: #999;
    }
  }
  .menu-link {
    color: red;
  }

  @media screen and (max-width: 768px) {
    .select-input {
      width: 100%;
    }
  }
`;
export const DivButtonWrapper = styled.div`
  text-align: right;
`;
export const ButtonReset = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.7rem 1rem;
  font-size: 0.9rem;
  border-radius: 25px;
  cursor: pointer;

  .btn-icon {
    width: 0;
    transition: all 0.3s ease;
  }

  &:hover .btn-icon {
    width: 20px;
  }
`;
