import { Link } from "react-router-dom/dist";

const LinkButton = ({ to, text }) => {
  return <Link className="block bg-white rounded px-4 py-2 text-black text-center font-bold text-lg hover:bg-slate-700" to={to}>{text}</Link>;
};

export default LinkButton;
