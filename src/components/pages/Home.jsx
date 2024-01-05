import LinkButton from "../layout/LinkButton";

const Home = () => {
  return (
    <section className="h-screen flex justify-center items-center flex-col gap-4">
      <h1 className="text-4xl font-bold">Bem-vindo a Trilha Project</h1>
      <p className="text-xl text-cyan-500">
        Comece gerenciar seus projetos agora mesmo!
      </p>
      <LinkButton to="/newproject" text="Criar Projeto" />
    </section>
  );
};

export default Home;
