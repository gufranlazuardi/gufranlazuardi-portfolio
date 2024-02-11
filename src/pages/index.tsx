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
        <div className="flex sm:gap-20 md:gap-12 lg:gap-12 xl:gap-24 sm:pl-4 md:pl-6 lg:pl-8 xl:pl-10 pt-16">
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Bonjour
            </h1>
            <div className="flex flex-col gap-4">
              <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                I'm Gufran Lazuardi
              </p>
              <span className="inline-flex flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] overflow-hidden">
                <ul className="block text-base sm:text-3xl leading-tight animate-text-slide">
                  <li className="text-[#2f7df4] text-xl sm:text-3xl font-bold">
                    Frontend Developer
                  </li>
                  <li className="text-[#2f7df4] text-xl sm:text-3xl font-bold">
                    Gamer
                  </li>
                  <li className="text-[#2f7df4] text-xl sm:text-3xl font-bold">
                    Runner
                  </li>
                  <li className="text-[#2f7df4] text-xl sm:text-3xl font-bold">
                    Frontend Developer
                  </li>
                  <li className="text-[#2f7df4] text-xl sm:text-3xl font-bold">
                    Gamer
                  </li>
                  <li className="text-[#2f7df4] text-xl sm:text-3xl font-bold">
                    Runner
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
