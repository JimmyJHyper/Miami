import Image from "next/image";
import styled from "styled-components";

export const ImageBikeContainer = styled.div`

  position: relative;
  width: 100%;
`

export const ImgBike = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  cursor: pointer;
`;