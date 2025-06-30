import {
  DivBikeNotFoundContainer,
  H3Title,
  ImgNotFound,
  PDescription,
} from "./styles";



function BikeNotFound() {

  return (
    <>

      <DivBikeNotFoundContainer>
        <ImgNotFound
          src="/images/not_found.webp"
          alt="not_found"
          width={100}
          height={100}
          quality={100}
          rel="dns-prefetch"
          priority
        />
        <H3Title>No Matching Motorcycle Found</H3Title>
        <PDescription>No Motorcycle found matching the Results, Please try to change the Filter or Search for something else.</PDescription>
      </DivBikeNotFoundContainer>
    </>
  );
}

export default BikeNotFound;
