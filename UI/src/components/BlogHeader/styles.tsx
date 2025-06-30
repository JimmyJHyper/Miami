import styled from "styled-components";

export const DivBlogHeaderContainer = styled.div`
  width: 80%;
  max-width: 1080px;
  margin: auto;
  text-align: center;
  padding: 2.5rem 0;
`;
export const PCategory = styled.p`
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.pink};
  font-weight: 700;
  margin-bottom: 2rem;
`;
export const H1Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 2.7rem;
  font-weight: 700;
  margin-bottom: 1rem;

  @media screen and (max-width: 980px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;
export const PDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray1};
`;
