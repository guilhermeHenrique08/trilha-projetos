import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import FormProject from "../projects/FormProject";

const Project = () => {
  const { projectId } = useParams();

  const [project, setProject] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    const projectsArr = JSON.parse(localStorage.getItem("projects"));
    const project = projectsArr.filter((proj) => proj.id === projectId);

    setProject(project[0]);
  }, [projectId]);

  function editProject(data) {
    const projectsArr = JSON.parse(localStorage.getItem("projects"));

    const projects = projectsArr.map((proj) => {
      if (proj.id === projectId) {
        data.id = projectId;
        proj = data;
      }
      return proj;
    });

    localStorage.setItem("projects", JSON.stringify(projects));
  }

  function toggleEditForm() {
    setShowEditForm(!showEditForm);
  }

  return (
    <section className="min-h-screen mx-auto flex flex-col gap-5 max-w-xl pt-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Projeto: {project.name}</h1>

        <button onClick={toggleEditForm} className="btn">
          {!showEditForm ? "Editar projeto" : "Fechar edição"}
        </button>
      </div>

      {!showEditForm ? (
        <div>
          <h2 className="text-xl font-bold mb-5">Dados do projeto</h2>

          <p className="text-gray-500 font-semibold">
            <span className="text-white">Categoria: </span>
            {project.category_id}
          </p>
          <p className="text-gray-500 font-semibold">
            <span className="text-white">Total do orçamento: </span> R$
            {project.budget}
          </p>
          <p className="text-gray-500 font-semibold">
            <span className="text-white">Total utilizado: </span> R$
            {project.budget}
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          <h2 className="text-xl font-bold">Editar dados do projeto</h2>
          <FormProject onSubmit={editProject} textBtn="Editar projeto" />
        </div>
      )}
    </section>
  );
};

export default Project;
