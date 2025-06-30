import styled from "styled-components";

export const DivBlogPaginationContainer = styled.div`
  width: 80%;
  max-width: 1080px;
  margin: auto;
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ButtonAction = styled.button`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.button};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
