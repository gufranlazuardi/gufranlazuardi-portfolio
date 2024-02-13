import Layout from "@/components/Layout";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export interface Artwork {
  project: string;
  photo: string;
  techstack: string[];
  link: string;
}

export const works: Artwork[] = [
  {
    project: "hi'SPEC",
    photo:
      "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
    link: "https://github.com/gufranlazuardi/hi-SPEC",
    techstack: ["react", "typescript", "tailwind", "axios"],
  },
  {
    project: "Cloudbite",
    photo:
      "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
    link: "www.google.com",
    techstack: ["react", "typescript", "tailwind", "axios"],
  },
  {
    project: "My Pokemon",
    photo:
      "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
    link: "https://github.com/gufranlazuardi/My-Pokemon",
    techstack: ["react", "typescript", "tailwind", "axios"],
  },
  {
    project: "Cinehub",
    photo:
      "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
    link: "https://github.com/gufranlazuardi/cinehub",
    techstack: ["react", "typescript", "tailwind"],
  },
  {
    project: "Simple Todolist",
    photo:
      "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
    link: "https://github.com/gufranlazuardi/simple-todolist",
    techstack: ["react", "typescript", "tailwind"],
  },
  {
    project: "Sportylive",
    photo:
      "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
    link: "https://github.com/gufranlazuardi/sportylive",
    techstack: ["react", "typescript", "tailwind"],
  },
];

const Project = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-6">
        <h1 className="font-bold text-2xl pb-12 pt-2 text-center">Project</h1>
        <div className="flex flex-col gap-10 items-center">
          <p className="">During study on Alterra Academy</p>
          <ScrollArea className="w-3/4 whitespace-nowrap rounded-md border">
            <div className="flex w-max space-x-4 p-4">
              {works.map((project) => (
                <figure key={project.project} className="shrink-0 ">
                  <div className="overflow-hidden rounded-md">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={project.photo}
                        alt={`Photo by ${project.photo}`}
                        className="aspect-[5/3] object-cover"
                        width={300}
                        height={400}
                      />
                    </a>
                  </div>
                  <figcaption className="pt-2 text-xs text-muted-foreground">
                    <div className="flex flex-col gap-2">
                      <p className="text-lg text-black dark:text-white">
                        {project.project}
                      </p>
                      <div className="flex gap-2">
                        {project.techstack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 border rounded text-black dark:text-white "
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
    </Layout>
  );
};

export default Project;
