import { BsFillTrashFill } from "react-icons/bs";

const CardService = ({ dataService, handleRemove }) => {
  function removeService(e) {
    e.preventDefault();
    handleRemove(dataService.id, dataService.cost);
  }

  return (
    <div className="bg-slate-200 w-72 h-52 p-4 rounded flex flex-col justify-between">
      <h3 className="text-cyan-500 font-bold text-xl max-w-full overflow-auto">
        {dataService.name}
      </h3>

      <p className="text-gray-500 font-semibold">
        <span className="text-black">Custo Total:</span> R${dataService.cost}
      </p>

      <p className="text-black">{dataService.description}</p>

      <button className="btn-card" onClick={removeService}>
        Excluir
        <BsFillTrashFill />
      </button>
    </div>
  );
};

export default CardService;
