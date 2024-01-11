import { useState, useEffect } from "react";

import LinkButton from "../layout/LinkButton";
import CardProject from "../projects/CardProject";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("projects")) {
      const projectsArray = JSON.parse(localStorage.getItem("projects"));

      setProjects(projectsArray);
    }
  }, []);

  function deleteProject(id) {
    const newsProjects = projects.filter((proj) => proj.id !== id);

    setProjects(newsProjects);

    localStorage.setItem("projects", JSON.stringify(newsProjects));
  }

  return (
    <section className="min-h-screen flex flex-col gap-14 px-14 py-7">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Meus projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>

      <div className="flex items-center gap-5 flex-wrap">
        {projects?.map((proj) => (
          <CardProject
            dataProject={proj}
            key={proj.id}
            deleteProject={deleteProject}
          />
        ))}

        {projects.length === 0 && <p>Não ha projetos</p>}
      </div>
    </section>
  );
};

export default Projects;
