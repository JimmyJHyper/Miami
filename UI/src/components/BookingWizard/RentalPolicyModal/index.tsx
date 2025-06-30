import GeneralModal from "@/components/common/GeneralModal";
import Link from "next/link";
import { DivContentWrapper } from "../common/styles";
import { H3Title } from "./styles";

type Props = {
  open: boolean;
  onClose: () => void;
};

function RentalPolicyModal({ open, onClose }: Props) {
  return (
    <GeneralModal open={open} onClose={onClose}>
      <H3Title>Return and Cancellation Policy</H3Title>

      <DivContentWrapper>
        <h3>
          <b>Reservations </b>
        </h3>
        <p>
          <span>
            According to the Terms and Policies incorporated in our{" "}
            <Link href="/terms-of-services" target="_blank">
              Terms of Service and Renters Policy
            </Link>
            , Renter may agree to enter into a Reservation Agreement. The Renter
            shall meet at the Miami Motorcycle Rentals location. Once the
            Parties have satisfied all necessary conditions — including but not
            limited to providing a valid license to operate Miami Motorcycle
            Rentals’ vehicle, a walk-through inspection of the vehicle by the
            Parties, taking pictures of the vehicle and odometer – the Parties
            may agree to commence the Rental Period if the conditions of the
            Reservation Agreement are met.{" "}
          </span>
        </p>
        <h3>
          <b>Reservation Cancellation </b>
        </h3>
        <p>
          <span>
            In some cases, it may be necessary for either of the Parties to
            cancel the Reservation before the pick-up appointment. Renters may
            cancel the Reservation by contacting Miami Motorcycle Rentals. It is
            the Renter’s responsibility to confirm that Miami Motorcycle Rentals
            have a confirmed receipt of any cancelation or change in the
            Reservation.
          </span>
        </p>
        <p>
          <span>
            Cancellations are effective immediately, and there is no refund.
            Miami Motorcycle Rentals offers flexible appointment times for your
            convenience. Before selecting your appointment times for rental
            check-in and check-out, please plan accordingly to avoid cancelation
            or additional fees.{" "}
          </span>
        </p>
        <p>
          <span>
            Failure to arrive within 1 hour of the appointed time may result in
            the Renter being charged the full amount of the rental, and the
            Reservation may be canceled.
          </span>
        </p>
        <p>
          <span>
            Miami Motorcycle Rentals may cancel the Reservation by contacting
            the Renter through Renter’s provided contact information. This may
            include Renter-provided email, text messaging, or phone calls.{" "}
          </span>
        </p>
        <h3>
          <b>Declining Commencement of Rental Period </b>
        </h3>
        <p>
          <span>
            The Parties have agreed to certain conditions in their Reservation
            Agreement, and also to abide by{" "}
             <Link href="/terms-of-services">
                Terms and Policies
            </Link>{" "}
            as required by Miami Motorcycle Rentals.
          </span>
        </p>
        <p>
          <span>
            The Rental Policies details certain conditions, including but not
            limited to, presenting a valid license for the operation of the
            vehicle to be rented, following safe operating procedures including
            demonstrating preparedness to operate the vehicle in compliance with
            the law, and that the vehicle is in safe operating conditions as
            advertised through the Miami Motorcycle Rentals platform.
          </span>
        </p>
        <p>
          <span>
            If these conditions are not met, Miami Motorcycle Rentals may
            decline the commencement of the Rental Period. Once a Rental Period
            has commenced, it may not be canceled.
          </span>
        </p>
        <p>
          <span>
            Once the Pre-trip photos of the vehicle, odometer, and Renter’s
            license have been documented, the Rental period has commenced.
          </span>
        </p>
        <h3>
          <b>Review Policies </b>
        </h3>
        <p>
          <span>
            According to the Reservation Agreement and the{" "}
            <Link href="/terms-of-services">
                Terms and Policies
            </Link>
            {" "}
            set forth by Miami Motorcycle Rentals, any late fees or incidental
            damage fees may be billed through the Renter’s Payment Method via
            our third-party payment processor.
          </span>
        </p>
        <p>
          <span>
            Renter understands and agrees that any payment method used in the
            reservation process shall remain open and effective throughout the
            Rental Period and shall close only after the transaction has
            concluded satisfactorily.
          </span>
        </p>
        <p>
          <span>
            Additionally, suppose the Renter demonstrates a pattern of abuse of
            these cancellations policies or continually works hardships against
            Miami Motorcycle Rentals by repeatedly canceling reservations,
            declining commencement of rental period in an arbitrary manner, or
            arriving at the pick-up appointment unprepared to commence the
            Rental period Miami Motorcycle Rentals may take whatever remedial
            action at its sole discretion, which may include suspension or
            termination of a Renter’s account and reservation.
          </span>
        </p>
        <p>&nbsp;</p>
        <h2>
          <b>Reservation/Rental Terms, Procedures, and Policies</b>
        </h2>
        <p>
          <span>
            Once you have selected a motorcycle you wish to rent, please follow
            the Reservation procedures as indicated in the listing. Miami
            Motorcycle Rentals will respond to
          </span>
        </p>
        <p>
          <span>
            Reservation Requests in a timely manner, if Miami Motorcycle Rentals
            should have any questions, or require additional information, Renter
            must also ensure all communication is timely, or Reservation
            Requests may lapse or otherwise be terminated for non-response.{" "}
          </span>
        </p>
        <p>
          <span>
            Once Renter and Miami Motorcycle Rentals have agreed to the
            reservation and rental terms, the Parties shall then be required to
            execute a Reservation Agreement that reflects the Terms of the
            Agreement between them.{" "}
          </span>
        </p>
        <p>
          <span>
            Please arrive at the Pick-up on time with a copy of your valid
            license (no temporary permits accepted), and in a manner that
            satisfies the terms of your Reservation (i.e. with designated
            Passengers, required safety gear if not being provided by Miami
            Motorcycle Rentals, etc.). The Rental does not commence until you
            have presented your valid license and satisfied Miami Motorcycle
            Rentals as to the terms of your Reservation Agreement.{" "}
          </span>
        </p>
        <h3>
          <b>Pick-up / Check-in</b>
        </h3>
        <p>
          <span>
            Renters are expected to arrive at the appointment times for pick-up
            and drop-off set forth in the Reservation Agreement.
          </span>
        </p>
        <p>
          <span>
            Renters are encouraged to let Miami Motorcycle Rentals know of any
            delays that may cause the renter not to arrive on time for pick-up
            or drop-off.
          </span>
        </p>
        <p>
          <span>
            After 30 minutes of being late (either pick-up or drop-off), the
            renter will be charged a $50 late fee each time they are late.
          </span>
        </p>
        <p>
          <span>
            After 1 hour of being late for the rental check-in, the reservation
            may be canceled, and the Renter will be responsible for the full
            amount of the rental.
          </span>
        </p>
        <p>
          <span>
            **No refunds (partial or full) will be given to the Renter for late
            pick-up or early return. A late pick-up does not change the return
            time for the rental (no credit is given for late pick-up or early
            return).**
          </span>
        </p>
        <h3>
          <b>Drop-off / Check-out</b>
        </h3>
        <p>
          <span>
            The vehicle must be returned at the agreed-upon time outlined in the
            Reservation Agreement. No credits or refunds are issued for early
            returns, even in the event of an accident.
          </span>
        </p>
        <p>
          <span>
            Unless the Parties have mutually agreed to an extension of the
            Rental Period and documented this, any returns (check-outs) running
            late will need to pay for the extension of their protection plan.{" "}
          </span>
        </p>
        <p>
          <span>
            Late more than 30 minutes past the agreed time in the Reservation
            Agreement shall incur a $50 Late Fee.
          </span>
        </p>
        <p>
          <span>
            Late more than one hour past the agreed time in the Reservation
            Agreement shall incur an additional day of Rental at full price, a
            $50 Late Fee, protection purchases, and gear rental fees if
            applicable.
          </span>
        </p>
        <p>
          <span>
            Every 24 hours, the renter will be assessed an additional day of
            Rental at full price, late fees, protection purchases, and gear
            rental fees if applicable.
          </span>
        </p>
        <h3>
          <b>Routine Maintenance and Fueling Responsibilities </b>
        </h3>
        <p>
          <span>
            Renter, during the Trip or Rental Period, assumes all responsibility
            for instructions communicated to you by Miami Motorcycle Rentals. In
            the event of mechanical failure, Renter shall promptly report issues
            to Miami Motorcycle Rentals. Upon return of the motorcycle, Renter
            may be held responsible for any damages beyond normal wear and tear
            deemed to be the result of the negligent operation or failure to
            provide routine maintenance.{" "}
          </span>
        </p>
        <h3>
          <b>Safe Renting Policy </b>
        </h3>
        <p>
          <span>
            At all times during the Rental Period please retain a copy of the
            Vehicle Registration, Reservation Agreement, and the Insurance card
            you have been provided through the Miami Motorcycle Rentals
            dashboard.{" "}
          </span>
        </p>
        <p>
          <span>
            Renter agrees that they shall use all legally required safety gear,
            including helmets, as required in the municipality or state where
            the Rental shall occur. It shall be Renter’s responsibility to
            ensure that appropriate safety gear is used regardless of whether it
            is supplied or rented from Miami Motorcycle Rentals according to
            terms agreed by the Parties.{" "}
          </span>
        </p>
        <p>
          <span>
            Furthermore, regardless of whether the law in your jurisdiction
            requires mandatory use of certain safety gear, including helmets,
            Renter acknowledges that Miami Motorcycle Rentals requires the use
            of appropriate safety gear appropriate for your riding ability and
            an acknowledgment that you may be unfamiliar with the motorcycle you
            have rented. In any and all cases, a DOT-approved motorcycle helmet
            is mandatory for both Renter and any accompanying Passenger.{" "}
          </span>
        </p>
        <p>
          <span>
            Miami Motorcycle Rentals requires you to identify by name any
            Passenger you shall convey during the Trip or Rental period at the
            time you submit any prospective reservation to be booked. Any
            Passenger must be at least 21 years or older.{" "}
          </span>
        </p>
        <p>
          <span>
            Renter is responsible for further ensuring that Passenger is
            familiar with motorcycle safety laws in your city and/or state.
            Passengers are required to review the Terms and Conditions of Miami
            Motorcycle Rentals. By submitting Passengers’ names and booking a
            registration with their information, Renter represents that
            Passenger has reviewed and accepted all incorporated Terms and
            Conditions. By so doing, Renter
          </span>
        </p>
        <p>
          <span>
            shall assume the responsibility and risk for ensuring that Passenger
            is in compliance with all applicable motorcycle safety and helmet
            laws.{" "}
          </span>
        </p>
        <p>
          <span>
            Furthermore, Miami Motorcycle Rentals requires Renter to review the
            Insurance and Damage Coverage options available at the time of check
            out. Renter agrees and understands that they assume all inherent
            risks and responsibilities in selecting the appropriate coverage,
            for ensuring they have the requisite skill required for the safe
            operation of the motorcycle to be rented, and that they have taken
            responsibility, financially and otherwise, for ensuring their
            Passenger shall comply with all laws and these Terms during the
            Rental or Trip Period.{" "}
          </span>
        </p>
        <h3>
          <b>Prohibited Activities </b>
        </h3>
        <p>
          <span>
            Renter agrees and understands that any of the following activities
            on the part of Renter or designated Passenger under Renter’s
            control, during the reservation period, prior to the beginning of
            the Trip or Rental period may result in cancellation of the
            reservation, early termination of rental, and non-performance of the
            Rental, OR, if any of the following activity occurs during the
            Rental period may negate any Insurance coverage, or results in the
            termination or suspension of their Renter account, or forfeiture of
            any monies paid during the Reservation process. Using, or attempting
            to use a vehicle rented through these Services:{" "}
          </span>
        </p>
        <ul>
          <li>
            <span>
              Without a valid appropriate license in good standing, presented
              and documented at the time of pick-up &amp; drop-off.{" "}
            </span>
          </li>
          <li>
            <span>
              With a suspended license or without full disclosure of driving
              record or infractions.
            </span>
          </li>
          <li>
            <span>
              Without demonstrable requisite skill at the time of pick-up.{" "}
            </span>
          </li>
          <li>
            <span>
              While under the influence of drugs, alcohol, medications, or any
              type of impairment that might prevent safe operation.{" "}
            </span>
          </li>
          <li>
            <span>
              Authorizing persons not specifically disclosed on the Reservation
              to operate or ride as a Passenger.{" "}
            </span>
          </li>
          <li>
            <span>
              Without legally required safety equipment in acceptable condition
              whether or not provided by Miami Motorcycle Rentals.{" "}
            </span>
          </li>
          <li>
            <span>Altering motorcycle in any way </span>
          </li>
          <li>
            <span>
              Off-road operation, racetrack, or operation on anything other than
              finished, paved roads.{" "}
            </span>
          </li>
          <li>
            <span>
              In a reckless manner i.e. Stunt driving, wheelies, burn-outs, etc.{" "}
            </span>
          </li>
          <li>
            <span>
              Riding a motorcycle in a manner not intended by the manufacturer.
            </span>
          </li>
          <li>
            <span>
              Failing to heed Miami Motorcycle Rentals’ specific instructions
              particular to the motorcycle being rented.{" "}
            </span>
          </li>
          <li>
            <span>
              Using the Motorcycle to tow or push an object, or in excess of
              manufacturers load limits.{" "}
            </span>
          </li>
          <li>
            <span>
              For commercial uses unless specifically approved by Miami
              Motorcycle Rentals.{" "}
            </span>
          </li>
          <li>
            <span>
              While Renter is distracted, for example, smoking, eating, texting,
              operating a cellphone or other device while riding.{" "}
            </span>
          </li>
          <li>
            <span>To enter a race or competition. </span>
          </li>
          <li>
            <span>In the commission of any criminal or reckless act. </span>
          </li>
          <li>
            <span>
              Without reporting an accident, or malfunction as soon as possible
              to Miami Motorcycle Rentals.{" "}
            </span>
          </li>
        </ul>
        <p>
          <b>
            **Miami Motorcycle Rentals may decline, cancel, or terminate any
            rental early at its sole discretion should such action be deemed in
            Miami Motorcycle Rentals’ best interest.{" "}
          </b>
        </p>
        <p>
          <span>
            Miami Motorcycle Rentals may cancel the reservation at the time of
            pick-up if the Renter is unable to provide a valid motorcycle
            license, does not possess required safety gear, is visibly impaired
            or demonstrates a lack of basic skill in the operation of a clutch,
            or manual transmission, or any skills fundamental to safe motorcycle
            operation. Miami Motorcycle Rentals is under no duty to perform any
            extensive assessment of skill and preparedness to begin the Rental
            period but may, at their discretion, cancel the Trip or Rental if
            the Renter is unable to provide a valid license or presents an
            appreciable threat to engage in Prohibited Activities or otherwise
            violate the Terms and Conditions of this Service or the Reservation
            Agreement between the Parties.{" "}
          </span>
        </p>
        <h3>
          <b>In The Event Of An Accident </b>
        </h3>
        <ul>
          <li>
            <span>
              Notify authorities and seek medical attention immediately.{" "}
            </span>
          </li>
          <li>
            <span>
              As soon as practical, inform Miami Motorcycle Rentals and allow
              them to retrieve and take possession of the motorcycle to prevent
              further damage or expense to be incurred that you may otherwise be
              held responsible for.{" "}
            </span>
          </li>
          <li>
            <span>
              Obtain names, addresses, phone numbers (work, home), and license
              numbers of all persons involved, including passengers and
              witnesses.{" "}
            </span>
          </li>
          <li>
            <span>
              Obtain license plate number and state of equipment involved in the
              accident.
            </span>
          </li>
          <li>
            <span>
              To the extent possible, take photos of the accident and document
              any damages to Passengers, or third parties or other property
              damage.
            </span>
          </li>
          <li>
            <span>
              For smaller incidents, do not attempt to repair damage or replace
              parts without Miami Motorcycle Rentals’ consent.{" "}
            </span>
          </li>
          <li>
            <span>File a police report. </span>
          </li>
          <li>
            <span>
              There are no refunds for trip days remaining in the reservation
              following an accident.{" "}
            </span>
          </li>
        </ul>
      </DivContentWrapper>
    </GeneralModal>
  );
}

export default RentalPolicyModal;
