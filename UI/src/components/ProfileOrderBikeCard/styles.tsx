import styled from "styled-components";
import Image from "next/image";

export const DivRowContainer = styled.div`
  display: flex;
  flex-direction: row; /* Horizontal layout */
  margin: 1rem;
  border-radius: 8px;
  overflow: hidden; /* Prevent overflow */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.colors.white};
  align-items: stretch; /* Stretch to match height */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack vertically on smaller screens */
    margin: 0.5rem; /* Reduce margin */
  }
`;

export const DivBikeCardContainer = styled.div`
  width: 200px; /* Fixed width for image */
  margin-right: 0; /* Space between image and details */

  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile */
    margin-right: 0; /* No margin on mobile */
  }
`;

export const CardImg = styled(Image)`
  width: 100%; /* Make image fill the container */
  height: 100%; /* Maintain aspect ratio */
  object-fit: cover; /* Ensure the image covers the space */
  border-left: 8px; /* Optional: Rounded corners for the image */
`;

export const CardDetails = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Align items to the top */
  flex: 1; /* Take remaining space */
  border-left: 1px solid ${({ theme }) => theme.colors.gray}; /* Divider line */

  @media (max-width: 768px) {
    border-left: none; /* Remove left border on mobile */
    padding: 0.5rem; /* Reduce padding on mobile */
  }
`;

export const CardTitle = styled.h4`
  font-size: 1.2rem;
  margin: 0.5rem 0;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1rem; /* Reduce font size on mobile */
  }
`;

export const CardStatus = styled.h6`
  font-size: 1rem;
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.colors.green}; /* Status color */

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Reduce font size on mobile */
  }
`;

export const DateInfo = styled.div`
  margin: 0.5rem 0;
  h6 {
    margin: 0.2rem 0;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.gray1}; /* Date color */

    @media (max-width: 768px) {
      font-size: 0.8rem; /* Reduce font size on mobile */
    }
  }
`;

export const PriceInfo = styled.h6`
  font-weight: bold;
  font-size: 1rem;
  margin-top: auto; /* Push to bottom */
  color: ${({ theme }) => theme.colors.blue}; /* Price color */

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Reduce font size on mobile */
  }
`;
