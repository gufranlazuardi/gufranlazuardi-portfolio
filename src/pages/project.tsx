import ProjectCard from "@/components/ProjectCard";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const Project = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <Layout>
      <motion.div
        className="grid grid-cols-1"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-bold text-2xl pb-16 pt-2 text-center">Project</h1>
        <div className="flex flex-col gap-6 items-center">
          <p className="text-sm w-3/4 text-justify">
            At Alterra Academy, I excelled in diverse projects, mastering
            technologies such as React, TypeScript, Tailwind CSS, and Axios.
            These experiences honed my technical proficiency and collaborative
            problem-solving, preparing me for real-world challenges. There is my
            project :
          </p>
          <ProjectCard />
        </div>
      </motion.div>
    </Layout>
  );
};

export default Project;
