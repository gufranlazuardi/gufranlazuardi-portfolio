import { ReactNode } from "react";
import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
}

const Layout = (prop: Readonly<Props>) => {
  const { children } = prop;

  return (
    <>
      <div className="flex flex-col w-full h-screen overflow-auto px-14 py-8 font-poppins">
        <Navbar />
        <div className="flex flex-col grow">{children}</div>
      </div>
    </>
  );
};

export default Layout;
