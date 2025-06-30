import styled from "styled-components";

export const DivBikeDetailContainer = styled.div`
  width: 80%;
  max-width: 1080px;
  margin: auto;
  padding: 2rem 0;
  padding-bottom: 5rem;
`;
export const DivFeatureGroup = styled.div`
  margin-bottom: 2rem;
  display: flex;

  gap: 0.5rem;
  .title-icon {
    min-width: 30px;
    font-size: 1.7rem;
    color: ${({ theme }) => theme.colors.purple};
  }
`;
export const PTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;
export const UlFeatureList = styled.ul`
  line-height: 1.5;
`;
export const LiFeatureItem = styled.li`
  list-style: disc !important;
`;
export const H3SubTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;
export const DivDescription = styled.div`
  line-height: 1.5;
  margin-bottom: 1rem;

  a {
    color: ${({ theme }) => theme.colors.pink};
  }
`;
