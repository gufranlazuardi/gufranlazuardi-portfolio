import CardExperience from "@/components/CardExperience";
import Layout from "@/components/Layout";

const Experience = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center">
        <p className="font-bold text-2xl py-2">Experience</p>
      </div>
      <CardExperience />
    </Layout>
  );
};

export default Experience;
