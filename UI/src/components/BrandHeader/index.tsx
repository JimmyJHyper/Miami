import { Brand } from "@/types";
import NavBar from "../NavBar";
import NotificationBar from "../NotificationBar";
import { DivBrandHeaderContainer, H1Title, ImgBrand } from "./styles";

type Props = {
  brand: Brand | undefined;
};

function BrandHeader({ brand }: Props) {

  return (
    <>

      <DivBrandHeaderContainer>
        <ImgBrand
          src={brand?.mediaItem?.mediaUrl!}
          alt="brand_logo"
          width={300}
          height={150}
          priority
          style={{objectFit: 'contain', height: 'auto'}}
          rel="dns-prefetch"
        />
        <H1Title>{brand?.name} Rental in Miami</H1Title>
        <NavBar nextLinks={[`${brand?.name} Rental Miami`]} />
        <NotificationBar />
      </DivBrandHeaderContainer>
    </>
  );
}

export default BrandHeader;
