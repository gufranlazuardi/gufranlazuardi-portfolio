import Layout from "@/components/Layout";

const Experience = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center justify-center">
          <p className="font-bold text-2xl py-4">Experience</p>
        </div>

        <div className="flex flex-col border rounded-md px-4 py-4 gap-2 max-w-6xl">
          <div className="flex gap-2 items-end">
            <p className="font-bold">Tiket.com</p>
            <p>-</p>
            <p className=" text-slate-500">Jakarta, Indonesia</p>
          </div>

          <h3>Oct 2022 – Jan 2024</h3>

          <p className="text-sm">
            • Ensuring precise mapping in the system by rectifying discrepancies
            between application points and actual locations
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
        <div className="flex flex-col border rounded-md  px-4 py-4 gap-2 max-w-6xl">
          <div className="flex gap-2 items-end">
            <p className="font-bold">Kimia Farma Trading & Distribution</p>
            <p>-</p>
            <p className=" text-slate-500">Jakarta, Indonesia</p>
          </div>

          <h3>May 2021 - Sep 2022</h3>
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
            •Coordinated with suppliers and stakeholders for timely repurchase
            in cases where stock was unavailable at branch offices. Monitoredthe
            stock tracking process to prevent indentations and facilitated
            efficient delivery tracking
          </p>
          <p className="text-sm">
            • Implemented a proactive approach to follow up on outstanding or
            pending stock at various stakeholders, guaranteeing the smooth and
            timely distribution of stocks
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
