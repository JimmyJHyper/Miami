import styled from "styled-components";

export const BannerContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 7px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px -1px 5px 0px ${({ theme }) => theme.colors.pink};
  cursor: pointer;

  &:hover {
    box-shadow: 0px 3px 5px -1px ${({ theme }) => theme.colors.pink};
  }

  /* Ensure it spans both columns in desktop view */
  grid-column: 1 / -1;

  /* Adjust height for better responsiveness */
  height: auto;
  max-height: 400px; /* Prevent excessive height on large screens */

  @media screen and (max-width: 979px) {
    max-height: 360px; /* Medium screen height */
  }

  @media screen and (max-width: 768px) {
    max-height: 300px; /* Small screens */
  }
`;

export const BannerImage = styled.img`
  object-fit: cover; /* Ensures it fills the space correctly */
  border-radius: 7px;
  width: 100%;
  height: auto;
  max-height: 100%;
  display: block;
`;

export const DivBanner = styled.div`
  width: 80%;
  max-width: 1080px;
  column-gap: 1.5rem;
  row-gap: 2rem;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 2rem;

  @media screen and (max-width: 979px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
