import styled from "styled-components";

export const DivBikeListContainer = styled.div`
  width: 80%;
  max-width: 1080px;
  column-gap: 1.5rem;
  row-gap: 2rem;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
