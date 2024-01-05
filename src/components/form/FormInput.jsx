import { forwardRef } from "react";

const FormInput = forwardRef(({ ...props }, ref) => {
  return (
    <input
      className="text-black px-2 py-1 rounded bg-slate-200"
      {...props}
      ref={ref}
    />
  );
});
export default FormInput;
