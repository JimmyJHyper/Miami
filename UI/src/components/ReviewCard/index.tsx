import { HiStar } from "react-icons/hi";
import { VscVerifiedFilled } from "react-icons/vsc";
import {
  DivCardHeader,
  DivNameBar,
  DivProfileWrapper,
  DivReviewCardContainer,
  DivStarsWrapper,
  ImgLogo,
  ImgProfile,
  PName,
  PReviewDate,
  PReviewText,
} from "./styles";

type Props = {
  review: {
    clientName: string;
    profileImage: string;
    date: string;
    rate: number;
    content: string;
  };
};

function ReviewCard({ review }: Props) {
  return (
    <DivReviewCardContainer>
      <DivCardHeader>
        <ImgProfile
          src={review.profileImage}
          alt="profile"
          width={40}
          height={40}
          rel="dns-prefetch"
        />
        <DivProfileWrapper>
          <DivNameBar>
            <PName>{review.clientName}</PName>
            <ImgLogo
              src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
              alt="google icon"
              width={20}
              height={20}
            />
          </DivNameBar>
          <PReviewDate>{review.date}</PReviewDate>
        </DivProfileWrapper>
      </DivCardHeader>

      <DivStarsWrapper>
        {Array(5)
          .fill(null)
          .map((_, idx) => (
            <HiStar
              key={idx}
              className={`star-icon ${review.rate > idx && "active"}`}
            />
          ))}

        <VscVerifiedFilled className="verify-icon" />
      </DivStarsWrapper>

      <PReviewText>{review.content}</PReviewText>
    </DivReviewCardContainer>
  );
}

export default ReviewCard;
