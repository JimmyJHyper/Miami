import { reviews } from "@/constants/services";
import CardCarousel from "../CardCarousel";
import ReviewCard from "../ReviewCard";
import {
  DivCardListWrapper,
  DivTestimonialsContainer,
  H2Title,
  PDescription,
} from "./styles";

const items = reviews.map((review, idx) => {
  return <ReviewCard key={idx} review={review} />;
});

function Testimonials() {

  return (
    <>

      <DivTestimonialsContainer>
        <H2Title>Best Ratings In Miami, FL!</H2Title>
        <PDescription>
          We Strive For A Fast, Easy, and Enjoyable Renting Experience.
          <br />
          See What Our Customers Have To Say.
        </PDescription>

        <DivCardListWrapper>
          <CardCarousel items={items} />
        </DivCardListWrapper>
      </DivTestimonialsContainer>
    </>
  );
}

export default Testimonials;
