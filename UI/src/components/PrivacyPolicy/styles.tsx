import styled from "styled-components";

export const DivPrivacyPolicyContainer = styled.div`
  width: 80%;
  max-width: 1080px;
  margin: auto;
  padding: 3rem 0;

  h1,
  h3,
  h4 {
    font-family: ${({ theme }) => theme.fonts.title};
    font-weight: 300;
  }

  h1 {
    margin-bottom: 2rem;
  }
  h3,
  h4,
  p,
  ul {
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.2rem;
  }

  p {
    line-height: 1.7;
  }

  a {
    color: ${({ theme }) => theme.colors.button};
  }

  li {
    list-style: disc;
    line-height: 1.7;
    margin-left: 1rem;
    font-weight: 300;
  }

  p,
  span {
    font-weight: 300;
  }
`;
