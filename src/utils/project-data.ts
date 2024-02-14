import cinemahubImage from "@/assets/cinemahub-ss.png";
import hispec from "@/assets/hispec-ss.png";
import mypokemon from "@/assets/my-pokemon-ss.png";
import sportylive from "@/assets/sportylive-ss.png";
import todolist from "@/assets/todolist-ss.png";
import cloudbite from "@/assets/cloudbite-ss.png";

export interface Artwork {
  project: string;
  photo: string;
  techstack: string[];
  link: string;
}

export const works: Artwork[] = [
  {
    project: "hi'SPEC",
    photo: hispec,
    link: "https://github.com/gufranlazuardi/hi-SPEC",
    techstack: ["react", "typescript", "tailwind", "axios"],
  },
  {
    project: "Cloudbite",
    photo: cloudbite,
    link: "www.google.com",
    techstack: ["react", "typescript", "tailwind", "axios"],
  },
  {
    project: "My Pokemon",
    photo: mypokemon,
    link: "https://github.com/gufranlazuardi/My-Pokemon",
    techstack: ["react", "typescript", "tailwind", "axios"],
  },
  {
    project: "Cinemahub",
    photo: cinemahubImage,
    link: "https://github.com/gufranlazuardi/cinemahub",
    techstack: ["react", "typescript", "tailwind"],
  },
  {
    project: "Simple Todolist",
    photo: todolist,
    link: "https://github.com/gufranlazuardi/simple-todolist",
    techstack: ["react", "typescript", "tailwind"],
  },
  {
    project: "Sportylive",
    photo: sportylive,
    link: "https://github.com/gufranlazuardi/sportylive",
    techstack: ["react", "typescript", "tailwind"],
  },
];
