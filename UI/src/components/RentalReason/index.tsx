import { Brand } from "@/types";
import { DivRentalReasonContainer, H2Title, PDescription } from "./styles";

type Props = {
  brand: Brand | undefined;
};

function RentalReason({ brand }: Props) {
  return (
    <DivRentalReasonContainer>
      <H2Title>Why Rent a {brand?.name?.replace("cycles", "cycle")}</H2Title>
      <PDescription>{brand?.revision}</PDescription>
    </DivRentalReasonContainer>
  );
}

export default RentalReason;
