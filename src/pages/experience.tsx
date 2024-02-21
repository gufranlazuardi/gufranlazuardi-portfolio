import CardExperience from "@/components/CardExperience";
import Layout from "@/components/Layout";

const Experience = () => {
  return (
    <Layout>
      <div className="sm:px-2 md:px-6 lg:px-8 xl:px-28">
        <div className="flex items-center justify-center">
          <p className="font-bold text-2xl py-2">Experience</p>
        </div>
        <CardExperience />
      </div>
    </Layout>
  );
};

export default Experience;
