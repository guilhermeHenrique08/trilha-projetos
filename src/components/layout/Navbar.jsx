import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-7">
      <h1 className="font-extrabold text-xl">Trilha Project</h1>

      <ul className="flex gap-7">
        <li className="text-cyan-500 font-medium p-1">
          <Link to="/">Inicio</Link>
        </li>
        <li className="text-cyan-500 font-medium p-1">
          <Link to="/projects">Projetos</Link>
        </li>
        <li className="text-cyan-500 font-medium p-1">
          <Link to="/newproject">Novo projeto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
