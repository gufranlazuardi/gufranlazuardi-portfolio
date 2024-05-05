import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/context/theme-provider";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { Separator } from "./ui/separator";
import icon from "../assets/127754894.png";

const Navbar = () => {
  const navigate = useNavigate();

  const resumeDownloadLink = "https://drive.google.com/file/d/1QD01_NppAoayJ3krxAULxRZoEvJ-V_Rn/view?usp=sharing";

  const { theme, setTheme } = useTheme();

  function handleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  return (
    <>
      <div className="w-full flex justify-between pb-6 px-0 md:px-6 lg:px-8 xl:px-28 pt-4">
        <Avatar
          className="cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <AvatarImage src={icon} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="flex gap-4 text-sm items-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="w-fit h-fit border-b-2 border-black py-1 px-2 dark:border-white">
              <p className="text-base">Nav</p>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={() => {
                  navigate("/");
                }}
              >
                About
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => {
                  navigate("/experience");
                }}
              >
                Experience
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  navigate("/project");
                }}
              >
                Project
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  navigate("/contact");
                }}
              >
                Contact
              </DropdownMenuItem>
              <a href={resumeDownloadLink} target="_blank" rel="noopener noreferrer" download="Resume">
                <Separator />
                <DropdownMenuItem>Download my resume</DropdownMenuItem>
              </a>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button onClick={() => handleTheme()} variant={"outline"} className="border-none">
            {theme === "light" ? <Moon /> : <Sun />}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
