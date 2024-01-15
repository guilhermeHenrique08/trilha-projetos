import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import FormProject from "../projects/FormProject";

import FormServices from "../services/FormServices";
import CardService from "../services/CardService";

const Project = () => {
  const { projectId } = useParams();

  const [project, setProject] = useState({});
  const [services, setServices] = useState([]);

  const [showEditForm, setShowEditForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);

  useEffect(() => {
    const projectsArr = JSON.parse(localStorage.getItem("projects"));
    const currentProject = projectsArr.filter((proj) => proj.id === projectId);

    setProject(currentProject[0]);
    setServices(currentProject[0].services || []);
  }, [projectId]);

  function updateProjectStateAndStorage(updatedProject) {
    setProject(updatedProject);
    setServices(updatedProject.services || []);

    const projectsArr = JSON.parse(localStorage.getItem("projects")) || [];

    const updatedProjects = projectsArr.map((proj) =>
      proj.id === projectId ? updatedProject : proj
    );
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
  }

  function toggleEditForm() {
    setShowEditForm(!showEditForm);
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm);
  }

  function editProject(data) {
    if (data.budget < project.cost) {
      alert("O orçamento não pode ser menor que o custo");
      return;
    }

    setShowEditForm(false);

    const updatedProject = {
      ...project,
      ...data,
    };

    updateProjectStateAndStorage(updatedProject);
  }

  function createService(data) {
    const newCost = data.cost + project.cost;

    if (newCost > project.budget) {
      return alert("O custo deve ser menor que o orçamento");
    }

    data.id = uuidv4();
    const updatedProject = {
      ...project,
      cost: newCost,
      services: [...services, data],
    };

    updateProjectStateAndStorage(updatedProject);

    setShowServiceForm(false);
  }

  function removeService(id, cost) {
    const newCost = project.cost - cost;

    const newsServices = services.filter((service) => service.id !== id);

    const updatedProject = {
      ...project,
      cost: newCost,
      services: newsServices,
    };

    updateProjectStateAndStorage(updatedProject);
  }

  return (
    <section className="min-h-screen mx-auto flex flex-col gap-5 max-w-xl py-8">
      <div className="pb-10 border-b-2 border-gray-500 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-cyan-500">
            Projeto: {project.name}
          </h1>

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
              {project.cost}
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            <h2 className="text-xl font-bold">Editar dados do projeto</h2>
            <FormProject onSubmit={editProject} textBtn="Editar projeto" />
          </div>
        )}
      </div>

      <div className="pb-10 border-b-2 border-gray-500 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Adicione um serviço</h2>

          <button onClick={toggleServiceForm} className="btn">
            {!showServiceForm ? "Adicionar serviço" : "Fechar serviço"}
          </button>
        </div>

        {showServiceForm && <FormServices onSubmit={createService} />}
      </div>

      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-bold">Serviços</h2>
        <div className="flex justify-between gap-5 flex-wrap">
          {services.length > 0 &&
            services.map((service) => (
              <CardService
                dataService={service}
                key={service.id}
                handleRemove={removeService}
              />
            ))}
          {services.length === 0 && <p>Não ha serviços</p>}
        </div>
      </div>
    </section>
  );
};

export default Project;
