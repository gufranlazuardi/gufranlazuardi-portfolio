import Layout from "@/components/Layout";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Twitter } from "lucide-react";

const Home = () => {
  return (
    <>
      <Layout>
        <div className="flex gap-24 pl-10 pt-16">
          <div className="flex flex-col gap-8 items-center">
            <Separator orientation="vertical" className="h-12" />
            <Twitter />

            <Linkedin />

            <Github />
            <Separator orientation="vertical" className="h-12" />
          </div>
          <div className="flex flex-col gap-8">
            <h1 className=" text-9xl">Bonjour</h1>
            <div className="flex flex-col gap-2">
              <p className=" text-6xl">I'm Gufran Lazuardi</p>
              <p className=" text-4xl">Frontend Developer</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
