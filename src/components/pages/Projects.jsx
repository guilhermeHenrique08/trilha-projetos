import { useState, useEffect } from "react";

import LinkButton from "../layout/LinkButton";
import CardProject from "../projects/CardProject";

const Projects = () => {
  const [thereProjects, setThereProjects] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("projects")) {
      const projectsArray = JSON.parse(localStorage.getItem("projects"));

      setThereProjects(projectsArray);
    }
  }, []);

  function deleteProject(id) {
    const newsProjects = thereProjects.filter((proj) => proj.id !== id);

    setThereProjects(newsProjects);

    localStorage.setItem("projects", JSON.stringify(newsProjects));
  }

  return (
    <section className="h-screen flex flex-col gap-8 p-12">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Meus projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>

      <div className="flex justify-between items-center gap-5 flex-wrap">
        {thereProjects?.map((proj) => (
          <CardProject
            dataProject={proj}
            key={proj.id}
            deleteProject={deleteProject}
          />
        ))}

        {thereProjects.length === 0 && <p>Não ha projetos</p>}
      </div>
    </section>
  );
};

export default Projects;
