import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/context/theme-provider";
import { Moon, Slack, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { Separator } from "./ui/separator";

const Navbar = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    const resumeUrl = "/gufran-lazuardi-resume-ats.pdf";

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = resumeUrl;

    link.download = "gufran-lazuardi-resume.pdf";

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger the click event to initiate download
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);
  };

  const { theme, setTheme } = useTheme();

  function handleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  return (
    <>
      <div className="w-full flex justify-between pb-6 px-0 md:px-6 lg:px-8 xl:px-28 pt-4">
        <div
          className="cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <Slack size={40} className="transform transition-transform hover:scale-125" />

        </div>

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
              <Separator />
              <DropdownMenuItem onClick={handleDownload}>
                Download my resume
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            onClick={() => handleTheme()}
            variant={"outline"}
            className="border-none"
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
