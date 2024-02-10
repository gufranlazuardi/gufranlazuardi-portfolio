import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const CardExperience = () => {
  return (
    <>
      <div className="flex flex-col gap-8 mt-10">
        <Card className="flex flex-col">
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle>
                Tiket.com{" "}
                <span className="text-slate-500 text-base font-normal">
                  - Jakarta, Indonesia
                </span>
              </CardTitle>
              <CardContent>Oct 2022 – Jan 2024</CardContent>
            </div>
            <CardDescription className="text-black text-base dark:text-white">
              Product Operations
            </CardDescription>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle>
                Kimia Farma Trading & Distribution{" "}
                <span className="text-slate-500 text-base font-normal">
                  - Jakarta, Indonesia
                </span>
              </CardTitle>
              <CardContent>May 2021 - Sep 2022</CardContent>
            </div>
            <CardDescription className="text-black text-base dark:text-white">
              Monitoring & Evaluation E-catalogue
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            <p>
              • Systematically reported and recorded distribution data,
              encompassing Paket ID, Stock Transfer Order (STO), Purchase Order
              (PO), and Facture. Executed seamless uploads to Google Data Studio
              for comprehensive insights
            </p>
            <p>
              • Ensured swift processing of stock and non-stock purchase
              requisitions, collaborating closely with suppliers and vendors.
              Oversaw theprocurement distribution to guarantee timely and
              well-managed deliveries
            </p>
            <p>
              •Coordinated with suppliers and stakeholders for timely repurchase
              in cases where stock was unavailable at branch offices.
              Monitoredthe stock tracking process to prevent indentations and
              facilitated efficient delivery tracking
            </p>
            <p>
              • Implemented a proactive approach to follow up on outstanding or
              pending stock at various stakeholders, guaranteeing the smooth and
              timely distribution of stocks
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default CardExperience;
