import { Link } from "react-router-dom/dist";

const LinkButton = ({ to, text }) => {
  return (
    <Link className="btn py-2 px-8" to={to}>
      {text}
    </Link>
  );
};

export default LinkButton;
