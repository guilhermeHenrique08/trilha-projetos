import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import FormProject from "../projects/FormProject";

const NewProject = () => {
  const navigate = useNavigate();

  function createProject(data) {
    data.id = uuidv4();

    if (localStorage.getItem("projects")) {
      const projects = localStorage.getItem("projects");
      const projectsArr = JSON.parse(projects);
      projectsArr.push(data);

      localStorage.setItem("projects", JSON.stringify(projectsArr));
    } else {
      const projects = [data];
      localStorage.setItem("projects", JSON.stringify(projects));
    }

    navigate("/projects");
  }

  return (
    <section className="h-screen flex justify-center items-center flex-col gap-4">
      <h1 className="text-4xl font-bold">Crie seu projeto</h1>
      <p className="text-lg text-cyan-500">
        Crie seu projeto para depois adicionar seu serviços
      </p>

      <FormProject onSubmit={createProject} />
    </section>
  );
};

export default NewProject;
