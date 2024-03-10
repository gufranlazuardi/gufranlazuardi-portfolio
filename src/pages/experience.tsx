import CardExperience from "@/components/CardExperience";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const Experience = () => {
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Layout>
      <motion.div
        className="sm:px-2 md:px-6 lg:px-8 xl:px-28"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center">
          <p className="font-bold text-2xl py-2">Experience</p>
        </div>
        <CardExperience />
      </motion.div>
    </Layout>
  );
};

export default Experience;
