import styled from "styled-components";

export const DivNavBarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  grid-row-gap: 0;
  font-size: 0.9rem;
  padding: 0.5rem;
  font-weight: 300;

  .home-icon {
    color: ${({ theme }) => theme.colors.pink};
  }
  .next-icon {
    font-size: 0.7rem;
  }
  span {
    text-align: center;
    line-height: 1.7;
  }
  span.active {
    color: ${({ theme }) => theme.colors.button};
  }
`;
