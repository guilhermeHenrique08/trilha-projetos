import { Link } from "react-router-dom";

import { BsPencil, BsFillTrashFill } from "react-icons/bs";

function CardProject({ dataProject }) {
  return (
    <div className="bg-slate-200 max-w-72 min-w-72  p-4 rounded">
      <h2 className="text-cyan-500 font-bold p-1 text-xl">{dataProject.name}</h2>

      <p className="text-gray-500 font-semibold">
        <span className="text-black">Orçamento:</span> R${dataProject.budget}
      </p>

      <p className="text-gray-500 font-semibold">
        <span className="text-black">Categoria:</span> {dataProject.category_id}
      </p>


      {/* <div className={styles.card_actions}>
        <Link to={`/project/${dataProject.id}`}>
          <BsPencil /> Editar
        </Link>
        <button>
          <BsFillTrashFill />
          Excluir
        </button>
      </div> */}
    </div>
  );
}

export default CardProject;
