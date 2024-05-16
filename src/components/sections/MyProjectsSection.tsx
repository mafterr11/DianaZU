import React from "react";
import Header from "../common/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "../cards/ProjectCard";

function MyProjectsSection() {
  const data = {
    toate: [
      {
        imageUrl: "/work/ilustratii/1.png",
        title: "Ilustratii",
      },
      {
        imageUrl: "/work/ilustratii/2.png",
        title: "Ilustratii",
      },
      {
        imageUrl: "/work/ilustratii/3.png",
        title: "Ilustratii",
      },
      {
        imageUrl: "/work/ilustratii/4.jpg",
        title: "Ilustratii ",
      },
      {
        imageUrl: "/work/ilustratii/5.png",
        title: "Ilustratii ",
      },
      {
        imageUrl: "/work/ilustratii/6.png",
        title: "Ilustratii ",
      },
      {
        imageUrl: "/work/background/1.jpg",
        title: "Web Design",
      },
    ],

    ilustratii: [
      {
        imageUrl: "/work/ilustratii/1.png",
        title: "Ilustratii",
      },
      {
        imageUrl: "/work/ilustratii/2.png",
        title: "Ilustratii",
      },
      {
        imageUrl: "/work/ilustratii/3.png",
        title: "Ilustratii",
      },
      {
        imageUrl: "/work/ilustratii/4.jpg",
        title: "Ilustratii ",
      },
      {
        imageUrl: "/work/ilustratii/5.png",
        title: "Ilustratii ",
      },
      {
        imageUrl: "/work/ilustratii/6.png",
        title: "Ilustratii ",
      },
    ],
    background: [
      {
        imageUrl: "/work/background/1.jpg",
        title: "Background design",
      },
    ],

    graficdesign: [
      {
        imageUrl: "/work/background/1.jpg",
        title: "Design grafic",
        description: "SOON",
      },
    ],
  };
  return (
    <section id="proiecte">
      <Header
        title="Proiectele mele"
        description="Explorați colecția mea de lucrări recente și proiecte creative."
      />

      <Tabs defaultValue="toate" className="my-8 w-full">
        <TabsList className="mb-[18rem] xl:mb-16 grid container grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <TabsTrigger value="toate">Toate</TabsTrigger>
          <TabsTrigger value="ilustratii">
            Ilustratii
          </TabsTrigger>
          <TabsTrigger value="background">
            Background
          </TabsTrigger>
          <TabsTrigger value="graficdesign">
            Design grafic
          </TabsTrigger>
        </TabsList>

        <TabsContent value="toate">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            {data.toate.map((project, index) => (
              <ProjectCard {...project} key={index} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="ilustratii">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            {data.ilustratii.map((project, index) => (
              <ProjectCard {...project} key={index} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="background">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            {data.background.map((project, index) => (
              <ProjectCard {...project} key={index} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="graficdesign">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            {data.graficdesign.map((project, index) => (
              <ProjectCard {...project} key={index} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
export default MyProjectsSection;
