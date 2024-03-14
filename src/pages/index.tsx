import Layout from "@/components/Layout";
import { Separator } from "@/components/ui/separator";
import { DribbbleIcon, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Role from "@/components/Role";

const Home = () => {
  const dribbleLink = "https://dribbble.com/gufranlazuardi";
  const githubLink = "https://www.github.com/gufranlazuardi";
  const linkedinLink = "https://www.linkedin.com/in/gufran-lazuardi";

  const variants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <Layout>
        <div className="flex flex-col">
          <motion.div
            className="flex pt-16 sm:px-10 md:px-6 lg:px-8 xl:px-28"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col gap-8 items-center">
              <Separator
                orientation="vertical"
                className="h-24 bg-black dark:bg-white"
              />
              <a href={dribbleLink} target="_blank" rel="noopener noreferrer">
                <DribbbleIcon />
              </a>
              <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <Github />
              </a>

              <Separator
                orientation="vertical"
                className="h-24 bg-black dark:bg-white"
              />
            </div>
            <div className="flex flex-col gap-10 ml-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                Bonjour
              </h1>
              <div className="flex flex-col gap-4">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                  I'm Gufran Lazuardi
                </p>
                <Role />
              </div>
            </div>
          </motion.div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
