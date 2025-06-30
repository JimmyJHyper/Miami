import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: ${(props: any) => props.theme.fonts.main};
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.primary};
    cursor: default;
  }
  h1,h2,h3,h4,h5,h6,button {
    margin: 0;
    cursor: text;
  }
  p {
    cursor: text;
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  button {
    outline: none;
    border: none;
    background: transparent;
    cursor: pointer;
  }

`;

export default GlobalStyles;
