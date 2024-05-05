import Layout from "@/components/Layout";
import { Separator } from "@/components/ui/separator";
import { DribbbleIcon, Github, Linkedin } from "lucide-react";
import Role from "@/components/Role";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const Home = () => {
  const dribbleLink = "https://dribbble.com/gufranlazuardi";
  const githubLink = "https://www.github.com/gufranlazuardi";
  const linkedinLink = "https://www.linkedin.com/in/gufran-lazuardi";

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Layout>
        <div className="flex flex-col" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="600">
          <div className="flex pt-16 sm:px-10 md:px-6 lg:px-8 xl:px-28">
            <div className="flex flex-col gap-8 items-center">
              <Separator orientation="vertical" className="h-24 bg-black dark:bg-white" />
              <a href={dribbleLink} target="_blank" rel="noopener noreferrer">
                <DribbbleIcon className="hover:transition-colors duration-700 hover:text-pink-500" />
              </a>
              <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                <Linkedin className="hover:transition-colors duration-700 hover:text-blue-300" />
              </a>
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="hover:transition-colors duration-700 hover:text-slate-500" />
              </a>

              <Separator orientation="vertical" className="h-24 bg-black dark:bg-white" />
            </div>
            <div className="flex flex-col gap-10 ml-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Bonjour</h1>
              <div className="flex flex-col gap-4">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">I'm Gufran Lazuardi</p>
                <Role />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
