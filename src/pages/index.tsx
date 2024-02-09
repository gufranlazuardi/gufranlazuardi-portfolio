import Layout from "@/components/Layout";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Twitter } from "lucide-react";

const Home = () => {
  const twitterLink = "https://www.twitter.com/gufranlazuardi";
  const githubLink = "https://www.github.com/gufranlazuardi";
  const linkedinLink = "https://www.linkedin.com/in/gufran-lazuardi";

  return (
    <>
      <Layout>
        <div className="flex sm:gap-20 md:gap-12 lg:gap-12 xl:gap-24 md:pl-6 lg:pl-8 xl:pl-10 pt-16">
          <div className="flex flex-col gap-8 items-center">
            <Separator
              orientation="vertical"
              className="h-24 bg-black dark:bg-white"
            />
            <a href={twitterLink} target="_blank" rel="noopener noreferrer">
              <Twitter />
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
          <div className="flex flex-col gap-10">
            <h1 className="sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Bonjour
            </h1>
            <div className="flex flex-col gap-4">
              <p className="md:text3xl lg:text-4xl xl:text-5xl">
                I'm Gufran Lazuardi
              </p>
              <p className=" text-4xl">Frontend Developer</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
