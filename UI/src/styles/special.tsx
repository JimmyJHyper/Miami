import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const Special = createGlobalStyle`
  ${normalize};
  li{
    list-style: disc !important;
  }

  ul{
    line-height:1.5;
  }
`;

export default Special;
