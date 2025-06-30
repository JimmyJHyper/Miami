import GeneralModal from "@/components/common/GeneralModal";
import React from "react";
import { H3Title } from "./styles";
import { DivContentWrapper } from "../common/styles";

type Props = {
  open: boolean;
  onClose: () => void;
};

function TermsOfServiceModal({ open, onClose }: Props) {
  return (
    <GeneralModal open={open} onClose={onClose}>
      <H3Title>Terms of Service and All Policies</H3Title>

      <DivContentWrapper>
        <h2>
          <b>Miami Motorcycle Rentals Account Terms </b>
        </h2>
        <p>
          <span>
            Please review the following terms prior to application to use the
            Miami Motorcycle Rentals service as a “Renter.”{" "}
          </span>
        </p>
        <p>
          <span>
            The following terms incorporate the Miami Motorcycle Rentals Terms
            of Service, Conditions, and all Policies. At the time of
            application, you will be asked to acknowledge and agree that all the
            information you will be submitting is true and accurate. You agree
            and understand that if Miami Motorcycle Rentals, at their
            discretion, allows a Renter account to be registered through this
            Service, you will be under an obligation to ensure that any required
            information and documentation of licensure or driving record as
            Miami Motorcycle Rentals may require in the process of application,
            and thereafter, shall be accurate and complete. Your acknowledgment
            shall form a binding contract that allows you to use these Services.{" "}
          </span>
        </p>
        <h3>
          <b>License Requirement </b>
        </h3>
        <p>
          <span>
            A valid motorcycle license is required to operate a 50cc or larger
            motorcycle. The license can be from anywhere in the world as long as
            it specifically lists that the license owner is qualified to operate
            a motorcycle. There will be no exception to this requirement.{" "}
          </span>
        </p>
        <p>
          <span>
            For a vehicle with less than 50cc (motorcycle or scooter), a
            motorcycle-specific license is not required. However, a valid
            driver’s license will be required.{" "}
          </span>
        </p>
        <p>
          <span>
            In all cases, no one under the age of 21 may rent a motorcycle or
            scooter of any size from Miami Motorcycle Rentals.{" "}
          </span>
        </p>
        <p>
          <span>
            Miami Motorcycle Rentals reserves the right to deny rental based on
            the inability to verify the validity of a license at its own
            discretion.{" "}
          </span>
        </p>
        <h3>
          <b>Application and Documentation </b>
        </h3>
        <p>
          <span>
            You agree and understand that Miami Motorcycle Rentals may require
            documentation, acceptable at their discretion, sufficient to
            demonstrate that you possess proper motorcycle licensure or proof of
            an acceptable driving record.{" "}
          </span>
        </p>
        <p>
          <span>
            You agree and understand that Miami Motorcycle Rentals at their
            discretion, and as may be required by law are authorized to access
            your driving record. You agree and promise to check all
            communications received and respond timely to all requests for
            documentation or further information.
          </span>
        </p>
        <p>
          <span>
            You acknowledge that Miami Motorcycle Rentals relies on the
            information you submit during registration, and all further uses of
            these Services to be accurate and complete.{" "}
          </span>
        </p>
        <h3>
          <b>Renters Obligations </b>
        </h3>
        <p>
          <span>
            You acknowledge that your use of these Services and every Rental or
            use of these Services shall conform to all incorporated Terms and
            Conditions. Specifically, you have reviewed Prohibited Uses and
            Renters Guidelines. You acknowledge that you shall accept financial
            responsibility for vehicles rented. You agree that you shall follow
            Rental and Reservation procedures as listed below in this document.{" "}
          </span>
        </p>
        <p>
          <span>
            You shall observe all local and state laws regarding safety gear and
            safe driving,{" "}
          </span>
          <b>you must wear a helmet while using a motorcycle</b>
          <span>
            , you understand that you may be responsible for demonstrating your
            compliance to all Terms and Policies, and the Terms of your
            Reservation Agreement, including identifying and accepting
            responsibility for passengers you designate during the Reservation
            process.{" "}
          </span>
        </p>
        <p>
          <span>
            You further agree and understand that if you demonstrate in any way
            that you are not prepared to assume these obligations, Miami
            Motorcycle Rentals may decline to begin the Rental and you may
            forfeit your reservation payment, or have your Renter account
            suspended or terminated as a result. You also re-confirm that you
            are at least 21 years or older.{" "}
          </span>
        </p>
        <h3>
          <b>Renters Acknowledgment </b>
        </h3>
        <p>
          <span>
            Miami Motorcycle Rentals may make certain assumptions in reliance on
            information submitted by Renters. You acknowledge that your
            application for a Renter account means that you warrant to Miami
            Motorcycle Rentals that you possess a valid license and the
            requisite skill to operate any vehicle you reserve.{" "}
          </span>
        </p>
        <p>
          <span>
            Additionally, you warrant that you possess sufficient knowledge to
            inspect any vehicle delivered or presented in order to perform a
            sufficient inspection prior to beginning the Rental period. You
            acknowledge that it is your responsibility to make a sufficient
            inspection and document any existing damage you detect prior to the
            rental period. Accordingly, you assume all inherent risks and agree
            to document and report any detected issues or inaccuracies in the
            Vehicle listing.{" "}
          </span>
        </p>
        <h3>
          <b>Renters Account </b>
        </h3>
        <p>
          <span>
            Renter agrees that the continued registration of their account is
            conditioned by their adherence to all incorporated Terms and
            Conditions. Renter further agrees and acknowledges that the purpose
            of these Services is to facilitate a rental transaction between
            Renter and Miami Motorcycle Rentals. You agree and understand that
            the Miami Motorcycle Rentals Service is provided for you to enter
            into a reservation and rental agreement.
          </span>
        </p>
        <p>
          <span>
            Miami Motorcycle Rentals provides administrative support in this
            process, including model Reservation Agreements, and maintenance of
            the Miami Motorcycle Rentals platform. Miami Motorcycle Rentals
            reserves the right to terminate or suspend User accounts deemed to
            violate the incorporated Terms and Conditions.{" "}
          </span>
        </p>
        <p>&nbsp;</p>
        <h2>
          <b>Return and Cancellation Policy </b>
        </h2>
        <p>&nbsp;</p>
        <h3>
          <b>Reservations </b>
        </h3>
        <p>
          <span>
            According to the Terms and Policies incorporated in our Terms of
            Service and Renters Policy, Renter may agree to enter into a
            Reservation Agreement. The Renter shall meet at the Miami Motorcycle
            Rentals location. Once the Parties have satisfied all necessary
            conditions — including but not limited to providing a valid license
            to operate Miami Motorcycle Rentals’ vehicle, a walk-through
            inspection of the vehicle by the Parties, taking pictures of the
            vehicle and odometer – the Parties may agree to commence the Rental
            Period if the conditions of the Reservation Agreement are met.{" "}
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
            Agreement, and also to abide by Terms and Policies as required by
            Miami Motorcycle Rentals.
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
            According to the Reservation Agreement and the Terms and Policies
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
        <p>&nbsp;</p>
        <h2>
          <b>Payment Terms &amp; Administrative Services Agreement </b>
        </h2>
        <p>
          <span>
            Before applying for, or registering a user account, you shall be
            required to verify and acknowledge that you have reviewed and agreed
            to the following Payment and Administrative Terms when presented
            with the prompt “I have reviewed and agreed to all incorporated
            Terms.”{" "}
          </span>
        </p>
        <p>
          <b>
            As a Renter (collectively a “Users”) you agree that the terms,
            generally summarized as the rental agreement, shall apply to your
            use of your User account, these Services, and all transactions with
            Miami Motorcycle Rentals arising therefrom:{" "}
          </b>
        </p>
        <ul>
          <li>
            <span>
              Miami Motorcycle Rentals provides support services in order to
              facilitate the rental transaction.{" "}
            </span>
          </li>
          <li>
            <span>
              Users agree that Miami Motorcycle Rentals shall be appointed as
              Payment Agent to receive payments and make payouts.{" "}
            </span>
          </li>
          <li>
            <span>
              Users agree that Miami Motorcycle Rentals shall provide other
              administrative services to facilitate Insurance and dispute
              resolution matters on behalf of Users as set forth in the Terms.{" "}
            </span>
          </li>
          <li>
            <span>
              Users agree that in their use of these Services, to the extent
              that shall enter into the process of booking a Reservation,
              completing a Rental/Trip, and in the process of finalizing any
              transaction, pursuant to Miami Motorcycle Rentals’ duties as
              Payment and Administrative Agent, USERS shall be required to
              review and respond to information communicated to them via their
              email, account portal or User Dashboard. Terms communicated by
              this method are incorporated into any Terms and Conditions and
              shall be binding when accepted, or unless disputed by the User.{" "}
            </span>
          </li>
        </ul>
        <h3>
          <b>Payment Agent </b>
        </h3>
        <p>
          <span>
            Miami Motorcycle Rentals is the limited agent for the purposes of
            collecting payments made by Renters on their behalf. Renter agrees
            to make Payments directly to Miami Motorcycle Rentals and Miami
            Motorcycle Rentals will honor the Reservation and Rental Agreement.
          </span>
        </p>
        <h3>
          <b>Miami Motorcycle Rentals’ Agreement </b>
        </h3>
        <p>
          <span>
            Miami Motorcycle Rentals, in accordance with terms applicable to the
            Reservation, permit the Renter to cancel the booking according to
            the cancellation policy.
          </span>
        </p>
        <h3>
          <b>Renter’s Agreement Subject to the Renter Terms </b>
        </h3>
        <p>
          <span>
            Renter agrees and acknowledges that they shall be asked to provide a
            verified and authorized Payment Method to the trusted third-party
            Payment Processor, Miami Motorcycle Rentals has designated Stripe as
            the Payment Processor. According to the Payment Processors’ terms
            and conditions, Renters shall be asked to submit customary billing
            information which may include name, billing address, and financial
            instrument information. To that extent, registration of a Renter’s
            User Account shall require accurate, complete, and current payment
            information at the time of registration, you hereby agree that you
            shall keep such billing information current, and up-to-date
            throughout your use of these Services.{" "}
          </span>
        </p>
        <h3>
          <b>Conditions of Payment Authorizations </b>
        </h3>
        <p>
          <span>
            By entering into a Reservation Agreement with Miami Motorcycle
            Rentals, you as a Renter authorize Miami Motorcycle Rentals to
            collect from you amounts due pursuant to these Payment Terms or the
            Miami Motorcycle Rentals’ Terms of Service and incorporated
            policies. Specifically, you authorize Miami Motorcycle Rentals to
            collect from you:{" "}
          </span>
        </p>
        <ul>
          <li>
            <span>
              Any amount due to Miami Motorcycle Rentals (e.g., as a result of
              your bookings, Booking Modifications, cancellations, or other
              actions as a user of the Miami Motorcycle Rentals Platform),
              including reimbursement for costs prepaid by Miami Motorcycle
              Rentals on your behalf, by charging any Payment Method on file
              with our Payment Processor. Any funds collected by Miami
              Motorcycle Rentals will set off the amount owed by you to Miami
              Motorcycle Rentals and extinguish your obligation to Miami
              Motorcycle Rentals.{" "}
            </span>
          </li>
          <li>
            <span>
              Any amount due to Miami Motorcycle Rentals from a Renter for Miami
              Motorcycle Rentals as a payment collection agent.{" "}
            </span>
          </li>
          <li>
            <span>Taxes, if applicable. </span>
          </li>
          <li>
            <span>
              Any amount you pay in the resolution of a Dispute for any Damage
              Claim in which the Insurance Protection you have purchased or
              provided is insufficient to cover related fees and charges. Miami
              Motorcycle Rentals may do so by charging the Payment Method
              associated with the relevant booking, or any other Payment Method
              on file.{" "}
            </span>
          </li>
          <li>
            <span>
              Additional Fees, which may include, Rental extensions, payable
              under the Miami Motorcycle Rentals Terms. In addition, Miami
              Motorcycle Rentals may recover any costs and expenses it incurs in
              collecting overages by charging any Payment Method(s) you have on
              file.{" "}
            </span>
          </li>
          <li>
            <span>
              Any Service Fees or cancellation fees imposed pursuant to the
              Miami Motorcycle Rentals’ Terms. Miami Motorcycle Rentals will be
              entitled to recover the amount of any such fees from you,
              including deductions to refund amounts.{" "}
            </span>
          </li>
          <li>
            <span>
              Fees improperly reimbursed to you as a Renter. If, for instance, a
              booked Reservation is canceled by the Renter’s failure to supply
              the required proof of valid Driver’s License, or if the Motorcycle
              is not in the condition to which the Parties have agreed. In such
              situations, Parties have agreed and accepted Miami Motorcycle
              Rentals’ appointment to resolve such disputes at their sole
              discretion. To the extent necessary, based upon Miami Motorcycle
              Rentals’ decision after requiring Renter to submit to informal
              dispute resolution in accordance with the Miami Motorcycle Rentals
              Terms, or other applicable cancellation policy, Renter agrees that
              in the event they have already been reimbursed or promised a
              reimbursement, Miami Motorcycle Rentals will be entitled to
              recover the amount of any such refund from you, including by
              subtracting such refund amount out from any future Reimbursements
              due to you.{" "}
            </span>
          </li>
          <li>
            <span>
              Fees, costs, and/or expenses associated with a Damage Claim, as
              set out in the Miami Motorcycle Rentals Terms or the Insurance
              Policy. If Miami Motorcycle Rentals is unable to collect from your
              Payment Method used to make the booking, you agree that Miami
              Motorcycle Rentals may charge any other Payment Method on file
              with our third party Payment Processor. Miami Motorcycle Rentals
              also reserves the right to otherwise collect payment from you and
              pursue any remedies available to Miami Motorcycle Rentals in this
              regard in situations in which you are responsible for a Damage
              Claim pursuant to the Miami Motorcycle Rentals Terms.{" "}
            </span>
          </li>
          <li>
            <span>
              The time it takes to receive Reimbursements once released by Miami
              Motorcycle Rentals may depend upon the Payout Method you select
              and the Payout Method provider’s processing schedule. Miami
              Motorcycle Rentals may delay or cancel any Reimbursement for
              purposes of preventing unlawful activity or fraud, risk
              assessment, security, or investigation.{" "}
            </span>
          </li>
          <li>
            <span>
              You authorize Miami Motorcycle Rentals to charge the Payment
              Method you have on file with our third-party Payment Processor.
              The Total Fees for any booking requested in connection with your
              User Account. Miami Motorcycle Rentals will collect the Total Fees
              according to the Fee Schedule. Miami Motorcycle Rentals will
              generally collect the Total Fees after Miami Motorcycle Rentals
              accepts a booking request. Once the payment transaction for your
              requested booking is successfully completed, you will receive a
              confirmation email.{" "}
            </span>
          </li>
          <li>
            <span>
              When you request to book a Reservation, Miami Motorcycle Rentals
              may also (i) obtain a pre-authorization via your Payment Method
              for the Total Fees, or (ii) authenticate your account via our
              third-party payment service provider to verify that your billing
              method is sufficient and up-to-date.{" "}
            </span>
          </li>
          <li>
            <span>
              If a reservation is canceled pursuant to the applicable
              cancellation policy you will be refunded any payments, fewer fees
              incurred according to the cancellation policy. The timing to
              receive the refund or for the pre-authorization to be released
              will vary based on the Payment Method and any applicable payment
              system (e.g., Visa, MasterCard, etc.) rules.
            </span>
          </li>
          <li>
            <span>
              You authorize Miami Motorcycle Rentals’ third-party payment
              processors to complete the Payment Method verifications described
              above and to charge your Payment Method for any bookings made in
              connection with your User Account. You hereby authorize Miami
              Motorcycle Rentals to collect any amounts due, by charging the
              Payment Method provided at checkout via our third-party payment
              processor.{" "}
            </span>
          </li>
        </ul>
        <h3>
          <b>Collections </b>
        </h3>
        <p>
          <span>
            If Miami Motorcycle Rentals is unable to collect any amounts you owe
            under these Payments Terms, Miami Motorcycle Rentals may engage in
            collection efforts to recover such amounts from a User.{" "}
          </span>
        </p>
        <ul>
          <li>
            <span>
              Miami Motorcycle Rentals will deem any owed amounts overdue for
              authorized charges after forty (40) days have elapsed after Miami
              Motorcycle Rentals’ first attempts to charge the User’s Payment
              Method or the associated services have been provided, whichever is
              later.{" "}
            </span>
          </li>
          <li>
            <span>
              Miami Motorcycle Rentals will deem any overdue amounts not
              collected to be in default when one hundred and twenty (120) days
              have elapsed: (a) for authorized charges after Miami Motorcycle
              Rentals’ first attempts to charge the User’s Payment Method or the
              associated services have been provided, whichever is later.{" "}
            </span>
          </li>
          <li>
            <span>
              You hereby explicitly agree that all communication in relation to
              amounts owed will be made by the communications methods provided
              to Miami Motorcycle Rentals by you at registration. Such
              communication may be made by Miami Motorcycle Rentals, or by
              anyone on their behalf, including but not limited to a third-party
              collection agent.{" "}
            </span>
          </li>
        </ul>
        <p>&nbsp;</p>
        <h2>
          <b>Insurance Terms </b>
        </h2>
        <p>&nbsp;</p>
        <h3>
          <b>THIRD-PARTY AUTO LIABILITY INSURANCE POLICY </b>
        </h3>
        <p>
          <span>
            DISCLAIMER: Miami Motorcycle Rentals’ Policy (the “Policy”) does not
            replace the need for Renters to satisfy financial responsibility
            requirements outside of a rental transaction. Renters (collectively
            “Users”) do not pay towards the Policy and are not insureds under
            the Policy. The Policy has limits in place and is not guaranteed to
            respond above the limits. This is an unofficial summary of Miami
            Motorcycle Rental’s Insurance Policy. Policy terms may be updated on
            a routine basis. The following applies to coverage through the
            Policy.{" "}
          </span>
        </p>
        <h3>
          <b>General </b>
        </h3>
        <p>
          <span>
            Insurance coverage under the Insurance Policy automatically includes
            state minimums for liability as further discussed below. Insurance
            coverage through the Miami Motorcycle Rentals Policy does not
            replace your personal insurance policy, until the commencement of
            the Rental Period. All Miami Motorcycle Rentals’ Renters are advised
            to retain personal insurance that meets their needs. Prior to the
            beginning of the Rental Period, during delivery, and after the
            drop-off, vehicles may not be covered by the Policy.{" "}
          </span>
        </p>
        <p>
          <span>
            Miami Motorcycle Rentals has taken out a policy which is designed
            also to provide protection for Renters (up to the “MFR”*) (up to USD
            300,000) during the “Rental Period” for the liability arising out of
            the Rental.{" "}
          </span>
        </p>
        <p>
          <span>
            *MFR: Minimum Financial Requirement as set by each individual State.{" "}
          </span>
        </p>
        <p>
          <span>
            “Rental Period” means the period of time during which the Renter has
            taken possession of and had permission to use a covered “motorcycle”
            pursuant to an in-force Reservation Agreement with Miami Motorcycle
            Rentals. The “Rental Period” ends immediately upon return of the
            “motorcycle” or termination by you of the Reservation Agreement.{" "}
          </span>
        </p>
        <p>
          <span>
            “Motorcycle” means a vehicle with less than four wheels, is powered
            by a motor above 49cc and has no pedals.
          </span>
        </p>
        <p>
          <span>
            Outside a Rental period, Miami Motorcycle Rentals assumes no duty or
            obligation to ensure the sufficiency of user’s insurance coverage
            and cannot undertake to give advice regarding Users’ personal policy
            or state and local laws.{" "}
          </span>
        </p>
        <h3>
          <b>Insurance Coverage Overview </b>
        </h3>
        <p>
          <span>
            The insurance coverage, through the Miami Motorcycle Rentals Policy,
            shall provide you minimum state-required coverage so long as you are
            in compliance with the Miami Motorcycle Rentals Terms and you do not
            misuse the motorcycle during the rental period.{" "}
          </span>
        </p>
        <p>
          <span>
            You also agree that as a Renter, your personal insurance, to the
            extent available, will act as primary to any coverage you have the
            benefit of through Miami Motorcycle Rentals.{" "}
          </span>
        </p>
        <p>
          <span>However, it’s important to note that: </span>
        </p>
        <ul>
          <li>
            <span>
              A condition of any coverage through the Miami Motorcycle Rentals
              Policy, or additional coverage, may require additional
              verification or records checks if it is deemed that the
              information you provided at the time of registering your Renter’s
              account is not complete or current.{" "}
            </span>
          </li>
          <li>
            <span>
              Miami Motorcycle Rentals does not provide insurance coverage for
              Passengers.{" "}
            </span>
          </li>
          <li>
            <span>
              Some Renters believe they are covered by protection related to
              their credit card. This is often not the case and you should
              consult with your credit card company before making such an
              assumption.{" "}
            </span>
          </li>
          <li>
            <span>
              You agree and understand that insurance provided under the Miami
              Motorcycle Rentals Policy, or additional purchased coverage, is
              offered by Miami Motorcycle Rentals’ third-party partner. Although
              Miami Motorcycle Rentals is NOT the insurer, Miami Motorcycle
              Rentals in some cases may act as an agent or representative in the
              resolution of some matters, including Insurance Claims.{" "}
            </span>
          </li>
          <li>
            <span>
              Subject to the Renters Terms, you have been made aware of certain
              exclusions to coverage, and you are aware of other avenues of
              reimbursement and dispute resolution available through the
              platform.{" "}
            </span>
          </li>
          <li>
            <span>
              In the resolution of some disputes, you agree and acknowledge that
              Miami Motorcycle Rentals may conduct investigations and make
              determinations that shall be binding on the Renter as set forth in
              the Miami Motorcycle Rentals Terms.{" "}
            </span>
          </li>
          <li>
            <span>
              Any coverage is only applicable to motorcycles rented for personal
              use.{" "}
            </span>
          </li>
          <li>
            <span>
              Damage as a result of vandalism and theft during the rental period
              must include a police report when submitting a claim, or the claim
              will not be accepted.{" "}
            </span>
          </li>
          <li>
            <span>
              Certain types of damage may be excluded from coverage, such as
              off-road or illegal usage.{" "}
            </span>
          </li>
          <li>
            <span>
              You agree and accept that you assume all obligations to review the
              Terms of Service.
            </span>
          </li>
        </ul>
        <h3>
          <b>COVERAGE LIMITS </b>
        </h3>
        <p>
          <span>
            Our insurance program provides auto insurance coverage to renters
            and vehicles that are eligible under our Terms of Service.{" "}
          </span>
        </p>
        <h3>
          <b>Third-Party Liability Coverage </b>
        </h3>
        <p>
          <span>
            Renters are provided the benefit of coverage under our insurance
            policy up to the Minimum Financial Requirement as set by each
            individual State. Renters are provided the benefit of coverage up to
            USD 300,000 combined single limit. Coverage includes third-party
            bodily injury or property damage arising from an auto accident
            during the Rental Period.{" "}
          </span>
        </p>
        <p>
          <span>This Coverage cannot be declined by a Renter. </span>
        </p>
        <h3>
          <b>
            PHYSICAL DAMAGE TO THE VEHICLE IS YOUR FINANCIAL RESPONSIBILITY{" "}
          </b>
        </h3>
        <p>
          <span>
            Protection plans made available on Miami Motorcycle Rentals are
            separate and apart from any insurance coverages described above and
            address the Renter’s financial liability for any damage to the
            vehicle. Please review the Renter Policy as well as the Terms of
            Service for additional terms regarding reimbursement for damages, or
            charges incurred as agreed by the Parties during a transaction.{" "}
          </span>
        </p>
        <h3>
          <b>RENTER POLICY</b>
        </h3>
        <p>
          <span>
            PER MIAMI MOTORCYCLE RENTALS TERMS OF SERVICE, RENTER AGREES, AND
            ACKNOWLEDGES THAT RENTER’S FINANCIAL RESPONSIBILITY IS PRIMARY WITH
            REGARDS TO DAMAGES, INJURIES, OR LOSSES THAT ARE INCURRED DURING
            RENTAL.{" "}
          </span>
        </p>
        <p>
          <span>
            As further discussed in the Renter Terms, as a Renter you
            acknowledge and agree that you are responsible for your own acts and
            omissions, as well as the acts and omissions of any individuals who
            you invite to, or otherwise provide access to the motorcycle.{" "}
          </span>
        </p>
        <p>
          <span>
            Any Passengers you provide access to must have agreed and accepted
            these Miami Motorcycle Rentals terms including the passenger policy.{" "}
          </span>
        </p>
        <p>
          <span>
            You are responsible for any and all damages incurred during the
            rental period and return of the vehicle according to your
            Reservation Agreement in a timely manner, in the condition in which
            it was rented.{" "}
          </span>
        </p>
        <p>
          <span>
            Damage Protection prices are displayed for users during the online
            reservation request process.{" "}
          </span>
        </p>
        <p>
          <span>
            Certain types of damage may be excluded from protection, such as
            off-road or illegal usage, and you agree and accept that you assume
            all obligations to review the Terms of Service.{" "}
          </span>
        </p>
        <p>
          <span>Protection does not extend to vehicles entering Mexico. </span>
        </p>
        <p>
          <span>
            All drivers, including the primary contract signer, must be approved
            through Miami Motorcycle Rentals.{" "}
          </span>
        </p>
        <p>
          <span>
            Subject to the Renter Terms, you have been made aware of certain
            exclusions to protection, and you are aware of other avenues of
            reimbursement and dispute resolution available through the platform.{" "}
          </span>
        </p>
        <p>
          <span>
            Damage due to vandalism and theft during the rental period must
            include a police report when submitting a claim, or the claim will
            not be accepted.{" "}
          </span>
        </p>
        <h3>
          <b>Deductibles (Safety Deposit / Theft) </b>
        </h3>
        <p>
          <span>
            Renters face a deductible. Physical Damage Protection is subject to
            a $400 to $5,000 comprehensive and collision protection deductible,
            except for any comprehensive loss due to theft, which is subject up
            to a $5,000 deductible. Any physical damage payment by us will be
            reduced by the applicable deductible. Miami Motorcycle Rentals is
            responsible for collecting deductible payments from Renter.{" "}
          </span>
        </p>
        <h3>
          <b>Damage Fee </b>
        </h3>
        <p>
          <span>
            In the event of any loss or damage to the vehicle, or any personal
            property or bodily injury claim, that occurs during the rental
            period due to any cause regardless of fault, including, but not
            limited to, collision, rollover, theft, vandalism, seizure, fire,
            flood, hail or other acts of nature or God, the renter is held
            responsible, and is required to pay Miami Motorcycle Rentals a fee
            of $150.{" "}
          </span>
        </p>
        <h3>
          <b>Exclusions: </b>
        </h3>
        <p>&nbsp;</p>
        <h4>
          <b>Personal Belongings </b>
        </h4>
        <p>
          <span>
            Personal belongings left in the vehicle are not insured. These
            include tapes, records, discs or other similar audio, visual, or
            data electronic devices, or any speed measuring equipment within the
            vehicle. It is the responsibility of the renter to ensure they
            remove any personal belongings from the vehicle before and after
            each rental.
          </span>
        </p>
        <h4>
          <b>No Permissive Drivers </b>
        </h4>
        <p>
          <span>
            We provide insurance for our Renters only. As per Miami Motorcycle
            Rentals’ Terms of Service, Miami Motorcycle Rentals’ motorcycles may
            only be driven by the Renter. Passengers may be carried to the
            extent they have been listed in the Reservation or Rental Agreement
            according to the Renter Terms.{" "}
          </span>
        </p>
        <h4>
          <b>Permissible Uses Only </b>
        </h4>
        <p>
          <span>
            Miami Motorcycle Rentals Insurance does not cover inherently risky
            activities such as sport or stunt-riding (ie. Wheelies, riding in a
            manner other than that intended by the manufacturer or Driving on
            unpaved roads or undesignated roadways (i.e. “off-roading,”
            unfinished roads, racetracks, or sidewalks). For further reference,
            consult the Prohibited Activities Section of the Renter policy.{" "}
          </span>
        </p>
        <h4>
          <b>Personal Usage Only </b>
        </h4>
        <p>
          <span>
            Physical damage protection applies to motorcycles rented for
            personal use only.{" "}
          </span>
        </p>
        <h4>
          <b>Accessories </b>
        </h4>
        <p>
          <span>
            Cosmetic damage to accessories (i.e. damage that does not render the
            accessory inoperable) is covered by Miami Motorcycle Rentals at
            Miami Motorcycle Rentals’ discretion.{" "}
          </span>
        </p>
        <h4>
          <b>Accessories Definition </b>
        </h4>
        <p>
          <span>
            Accessories include items such as luggage, crash bars, device
            mounts, tool kits, and vehicle locks, or other decorative components
            not part of the OEM factory condition of the motorcycle.{" "}
          </span>
        </p>
        <p>&nbsp;</p>
      </DivContentWrapper>
    </GeneralModal>
  );
}

export default TermsOfServiceModal;
