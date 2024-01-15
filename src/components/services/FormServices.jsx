import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../form/Form";

const schema = z.object({
  name: z.string().nonempty("Este campo não pode estar vazio"),
  cost: z.coerce.number().positive("O numero deve ser maior que 0"),
  description: z.string().nonempty("Este campo não pode estar vazio"),
});

const FormServices = ({ onSubmit }) => {
  const methods = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col gap-4 w-full max-w-xl"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <Form.Group>
          <Form.Label htmlFor="name" text="Nome do serviço:" />
          <Form.Input type="text" id="name" {...methods.register("name")} />
          <Form.ErrorMessage name="name" />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="cost" text="Custo do serviço:" />
          <Form.Input type="number" id="cost" {...methods.register("cost")} />
          <Form.ErrorMessage name="cost" />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="description" text="Descrição do serviço:" />
          <Form.Input
            type="text"
            id="description"
            {...methods.register("description")}
          />
          <Form.ErrorMessage name="description" />
        </Form.Group>

        <button type="submit" className="btn">
          Adicionar Serviço
        </button>
      </form>
    </FormProvider>
  );
};

export default FormServices;
