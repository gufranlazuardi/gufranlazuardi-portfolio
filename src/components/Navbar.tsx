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

const Navbar = () => {
  const navigate = useNavigate();

  const resumeDownloadLink =
    "https://drive.google.com/file/d/1wfZwIMOPmWBtM64xjgq4HE556lktNbz5/view?usp=sharing";

  const { theme, setTheme } = useTheme();

  function handleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  return (
    <>
      <div className=" w-full flex justify-between pb-6 pl-8 pt-4 sticky z-0">
        <Avatar
          className="cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="flex gap-4 text-sm pr-8 items-center">
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
              <DropdownMenuItem>Education</DropdownMenuItem>
              <DropdownMenuItem>Project</DropdownMenuItem>
              <DropdownMenuItem>Contact</DropdownMenuItem>
              <a
                href={resumeDownloadLink}
                target="_blank"
                rel="noopener noreferrer"
                download="Resume"
              >
                <DropdownMenuItem>Download my resume</DropdownMenuItem>
              </a>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            onClick={() => handleTheme()}
            variant={"outline"}
            className="border-none"
          >
            {theme === "light" ? <Sun /> : <Moon />}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
