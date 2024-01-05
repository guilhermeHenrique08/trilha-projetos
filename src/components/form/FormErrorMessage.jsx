import { useFormContext } from "react-hook-form";

const FormErrorMessage = ({ name }) => {
  const {
    formState: { errors },
  } = useFormContext();

  if (!errors[name]) {
    return null;
  }

  return <p className="text-red-400 text-bold">{errors[name].message}</p>;
};

export default FormErrorMessage;
