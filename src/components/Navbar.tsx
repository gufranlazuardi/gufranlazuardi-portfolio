import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon } from "lucide-react";

const Navbar = () => {
  const resumeDownloadLink =
    "https://drive.google.com/file/d/1wfZwIMOPmWBtM64xjgq4HE556lktNbz5/view?usp=sharing";

  return (
    <>
      <div className=" w-full flex justify-between pb-6 pl-8 pt-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="flex gap-8 text-sm pr-8 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="w-fit h-fit border py-1 px-4 rounded-md">
              <p className="text-base">Menu</p>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>About</DropdownMenuItem>
              <DropdownMenuItem>Experience</DropdownMenuItem>
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
          <Moon />
        </div>
      </div>
    </>
  );
};

export default Navbar;
