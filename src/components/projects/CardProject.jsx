import { Link } from "react-router-dom";

import { BsPencil, BsFillTrashFill } from "react-icons/bs";

function CardProject({ dataProject, deleteProject }) {
  function onDelete(e) {
    e.preventDefault();
    deleteProject(dataProject.id);
  }

  return (
    <div className="bg-slate-200 max-w-80 min-w-80 min-h-52 max-h-52 p-4 rounded flex flex-col justify-between">
      <h2 className="text-cyan-500 font-bold text-xl max-w-full overflow-auto">
        {dataProject.name}
      </h2>

      <div>
        <p className="text-gray-500 font-semibold">
          <span className="text-black">Orçamento:</span> R${dataProject.budget}
        </p>

        <p className="text-gray-500 font-semibold">
          <span className="text-black">Categoria:</span>{" "}
          {dataProject.category_id}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Link
          to={`/project/${dataProject.id}`}
          className="flex btn max-w-max items-center gap-1"
        >
          Editar <BsPencil />
        </Link>
        <button
          className="flex btn max-w-max items-center gap-1"
          onClick={onDelete}
        >
          Excluir
          <BsFillTrashFill />
        </button>
      </div>
    </div>
  );
}

export default CardProject;
