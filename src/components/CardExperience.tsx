import { Separator } from "./ui/separator";

const CardExperience = () => {
  return (
    <>
      <div className="flex flex-col gap-8 mt-10">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <div className="gap-2">
              <span className="text-2xl">Tiket.com {""}</span>
              <span>- {""}</span>
              <span>Jakarta, Indonesia</span>
            </div>
            <div>
              <p className="text-xs md:text-md lg:text-lg xl:text-lg">
                Oct 2022 – Jan 2024
              </p>
            </div>
          </div>
          <p>Product Operations</p>
          <div className="flex flex-col gap-2 text-justify">
            <p className="text-sm">
              • Ensuring precise mapping in the system by rectifying
              discrepancies between application points and actual locations
            </p>
            <p className="text-sm">
              • Spearheading the development of an AI system to identify
              components within hotel rooms, focusing on the living room,
              bathroom, and bedroom for an enriched user experience
            </p>
            <p className="text-sm">
              • Implemented strategies to unmerge hotels with similar titles at
              identical location points, optimizing the clarity and accuracy of
              our hotel listings
            </p>
            <p className="text-sm">
              • Keeping Tiket.com competitive by dynamically updating top hotel
              prices based on market adjustments, ensuring alignment with fixed
              prices in competitor applications
            </p>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <div className="gap-2">
              <span className="text-2xl">
                Kimia Farma Trading & Distribution{" "}
              </span>
              <span>- {""}</span>
              <span>Jakarta, Indonesia</span>
            </div>
            <div>
              <p className="text-xs md:text-md lg:text-lg xl:text-lg">
                Oct 2022 – Jan 2024
              </p>
            </div>
          </div>
          <p>Moniotring & Evaluation E-catalogue</p>
          <div className="flex flex-col gap-2 text-justify">
            <p className="text-sm">
              • Systematically reported and recorded distribution data,
              encompassing Paket ID, Stock Transfer Order (STO), Purchase Order
              (PO), and Facture. Executed seamless uploads to Google Data Studio
              for comprehensive insights
            </p>
            <p className="text-sm">
              • Ensured swift processing of stock and non-stock purchase
              requisitions, collaborating closely with suppliers and vendors.
              Oversaw theprocurement distribution to guarantee timely and
              well-managed deliveries
            </p>
            <p className="text-sm">
              • Coordinated with suppliers and stakeholders for timely
              repurchase in cases where stock was unavailable at branch offices.
              Monitoredthe stock tracking process to prevent indentations and
              facilitated efficient delivery tracking
            </p>
            <p className="text-sm">
              • Implemented a proactive approach to follow up on outstanding or
              pending stock at various stakeholders, guaranteeing the smooth and
              timely distribution of stocks
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardExperience;
