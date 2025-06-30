import { useMarketing } from "@/providers/MarketingProvider";
import { MarketingContextType } from "@/providers/types";
import { convertTitleToLink } from "@/utils/helpers";
import Link from "next/link";
import EmailIcon from "../common/Icons/EmailIcon";
import InstagramIcon from "../common/Icons/InstagramIcon";
import LocationIcon from "../common/Icons/LocationIcon";
import PhoneIcon from "../common/Icons/PhoneIcon";
import {
  ContactItem,
  DivDescription,
  DivFinalWrapper,
  DivFooterContainer,
  DivFutureLinks,
  DivMapWrapper,
  DivReferenceItem,
  DivReferenceWrapper,
  H4Title,
  IconWrapper,
  ImgLogo,
  LinkItem,
  PDescription,
  PLink,
} from "./styles";
import type { Brand } from "@/types";


interface FooterProps {
  allBrands?: Brand[];
}

function Footer({ allBrands }: FooterProps) {
  
  const { allBrands: allBrandClient } = useMarketing() as MarketingContextType;

  const brands = allBrands || allBrandClient;

  const brandOptions = brands?.map((brand) => {
    const label = `${brand.name.replace("cycles", "cycle")} Rental`;
    const link = convertTitleToLink(label) + "-miami";
    return { label, link };
  });


  return (
    <>

      <DivFooterContainer>
        <DivReferenceWrapper>
          <DivReferenceItem center>
            <Link href="/">
              <ImgLogo
                src="/images/main_logo.png"
                alt="miami-motorcycle-rentals-logo"
                width={150}
                height={150}
                rel="dns-prefetch"
              />
            </Link>
          </DivReferenceItem>
          <DivReferenceItem>
            <H4Title>Quick Links</H4Title>
            {brandOptions?.map((option, idx) => (
              <Link key={idx} href={`/${option.link}`}>
                <LinkItem>{option.label}</LinkItem>
              </Link>
            ))}
            <Link href="/blog">
              <LinkItem>Blog</LinkItem>
            </Link>
          </DivReferenceItem>
          <DivReferenceItem>
            <H4Title>Contact Info</H4Title>
            <LinkItem>
              {/* <RiPhoneFill className="item-icon" />
               */}
              <PhoneIcon className="item-icon" />
              <ContactItem>305 803 1241</ContactItem>
            </LinkItem>
            <LinkItem>
              {/* <GoMail className="item-icon" /> */}
              <EmailIcon className="item-icon" />
              <ContactItem>info@miamimotorcyclerentals.com</ContactItem>
            </LinkItem>
            <LinkItem>
              {/* <IoLocationSharp className="item-icon" /> */}
              <LocationIcon className="item-icon" />
              <ContactItem>1222 NW 7th Ave, Miami FL 33136</ContactItem>
            </LinkItem>
            <Link href="https://www.instagram.com/miamimotorcyclerentals/">
              <IconWrapper>
                {/* <BsInstagram className="item-icon" /> */}
                <InstagramIcon className="item-icon" />
              </IconWrapper>
            </Link>
          </DivReferenceItem>
        </DivReferenceWrapper>

        <DivMapWrapper>
          <iframe
            src="https://maps.google.com/maps?q=1222%20NW%207th%20Ave%2C%20Miami%20FL%2033136%20&amp;t=m&amp;z=13&amp;output=embed&amp;iwloc=near&amp;hl=en_US"
            width="100%"
            height="250"
            allowFullScreen
            loading="lazy"
            rel="dns-prefetch"
            data-rocket-lazyload="fitvidscompatible"
            data-lazy-src="https://maps.google.com/maps?q=1222%20NW%207th%20Ave%2C%20Miami%20FL%2033136%20&amp;t=m&amp;z=13&amp;output=embed&amp;iwloc=near&amp;hl=en_US"
            data-ll-status="loaded"
          ></iframe>
        </DivMapWrapper>

        <DivFinalWrapper>
          <DivDescription>
            &copy; {new Date().getFullYear()} Miami Motorcycle Rentals. All
            rights reserved.
          </DivDescription>
          <PDescription>
            Text and Image content, Miami Motorcycle Rentals (& Design)
            ®displayed on this website is protected by copyright laws. <br />
            Downloading, republication, retransmission or reproduction of
            content on this website is strictly prohibited.
          </PDescription>
          <PLink>
            <Link href="/terms-of-services">TERMS & CONDITIONS</Link> |{" "}
            <Link href="/privacy-policy">PRIVACY POLICY</Link>
          </PLink>
          <DivFutureLinks>
            <Link href="/">Motorcycle Rentals Miami</Link> |{" "}
            <Link href="/">Best Motorcycle Rentals Miami</Link> |{" "}
            <Link href="/">Harley Motorcycle Rentals Miami</Link> |{" "}
            <Link href="/">Luxury Motorcycle Rentals Miami</Link> |{" "}
            <Link href="/">Long-term Motorcycle Rentals Miami</Link>
          </DivFutureLinks>
        </DivFinalWrapper>
      </DivFooterContainer>
    </>
  );
}

export default Footer;
