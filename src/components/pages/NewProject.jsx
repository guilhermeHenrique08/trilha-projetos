import FormProject from "../projects/FormProject";

const NewProject = () => {
  function createProject(data) {
    const projects = [data];

    if (localStorage.getItem("projects")) {
      const projects = localStorage.getItem("projects");
      const projectsArr = JSON.parse(projects);
      projectsArr.push(data);

      localStorage.setItem("projects", JSON.stringify(projectsArr));
    } else {
      localStorage.setItem("projects", JSON.stringify(projects));
    }
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
