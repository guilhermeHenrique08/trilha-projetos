import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../form/Form";

const schema = z.object({
  name: z.string().nonempty("Este campo não pode estar vazio"),
  budget: z.coerce.number().positive("O numero deve ser maior que 0"),
  category_id: z.string(),
});

const FormProject = ({ onSubmit, textBtn }) => {
  const methods = useForm({
    resolver: zodResolver(schema),
  });

  const categories = [
    {
      id: 1,
      name: "Infraestrutura",
    },
    {
      id: 2,
      name: "Desenvolvimento",
    },
    {
      id: 3,
      name: "Design",
    },
    {
      id: 4,
      name: "Planejamento",
    },
  ];

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col gap-4 w-full max-w-xl"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <Form.Group>
          <Form.Label htmlFor="name" text="Nome do projeto:" />
          <Form.Input type="text" id="name" {...methods.register("name")} />
          <Form.ErrorMessage name="name" />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="budget" text="Orçamento do projeto:" />
          <Form.Input
            type="number"
            id="budget"
            {...methods.register("budget")}
          />
          <Form.ErrorMessage name="budget" />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="category_id" text="Selecione a categoria" />
          <select
            id="category_id"
            className="text-black px-2 py-1 rounded bg-slate-200"
            {...methods.register("category_id")}
          >
            {categories.map((cat) => (
              <option className="text-black" key={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </Form.Group>

        <button type="submit" className="btn">
          {textBtn}
        </button>
      </form>
    </FormProvider>
  );
};

export default FormProject;
