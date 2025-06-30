import { rentalServices } from "@/constants/services";
import {
  DivRentalServiceContainer,
  DivServiceCard,
  DivServiceList,
  H2Title,
  ServiceDescription,
  ServiceTitle
} from "./styles";

function RentalService() {
  return (
    <>
      <DivRentalServiceContainer>
        <H2Title>Motorcycle Rentals in Miami Made Easy</H2Title>

        <DivServiceList>
          {rentalServices.map((service, idx) => (
            <DivServiceCard key={idx}>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </DivServiceCard>
          ))}
        </DivServiceList>
      </DivRentalServiceContainer>
    </>
  );
}

export default RentalService;


