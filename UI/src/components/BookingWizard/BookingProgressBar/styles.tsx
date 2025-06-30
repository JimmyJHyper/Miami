import styled from "styled-components";

export const DivBookingProgressBarContainer = styled.div`
  width: 94%;
  max-width: 850px;
  margin: auto;

  .MuiLinearProgress-bar {
    background-color: ${({ theme }) => theme.colors.pink};
  }
  .MuiLinearProgress-root {
    background-color: ${({ theme }) => theme.colors.opacityPink};
  }
`;

export const PTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.wizardBlack};
  font-size: 1.8rem;
  padding: 3rem 0;
  text-align: center;
`;
