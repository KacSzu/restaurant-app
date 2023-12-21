import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import Loader from "../ui/Loader";
import FormRow from "../ui/FormRow";
import { useCreateMenuItem } from "./useCreateMenuItem";

function AddMenuItemForm({ onCloseModal }) {
  const { register, formState, handleSubmit, reset } = useForm();
  const { createMenuItem, isPending } = useCreateMenuItem();
  const { errors } = formState;
  function onSubmit(data) {
    const newItem = {
      category: data?.category?.toLowerCase().replace(/\s/g, ""),
      name: data?.name,
      unitPrice: data?.unitPrice,
      ingredients: data?.ingredients?.split(/\s*,\s*/),
    };
    createMenuItem(newItem, {
      onSettled: () => {
        reset();
        onCloseModal?.();
      },
    });
  }
  if (isPending) return <Loader />;
  return (
    <form
      className=" mx-auto my-8 flex w-[450px] flex-col items-center space-y-4  px-6   "
      onSubmit={handleSubmit(onSubmit)}
      method="POST"
    >
      <div className=" flex flex-col gap-4">
        <FormRow label="Category">
          <select
            disabled={isPending}
            className="w-[300px] rounded-lg border border-neutral-800 px-6 py-3 text-base duration-500 placeholder:uppercase   focus:outline-none focus:ring focus:ring-neutral-400  focus:ring-offset-2 xl:w-[350px] xl:text-lg"
            type="text"
            id="category"
            {...register("category", { required: "This field is required" })}
          >
            <option>Pizza</option>
            <option>Pasta</option>
            <option>Wine</option>
            <option>Alcohol free</option>
          </select>
        </FormRow>
        <FormRow error={errors?.name?.message} label="Name">
          <input
            disabled={isPending}
            className="w-[300px] rounded-lg border border-neutral-800 px-6 py-3 text-base duration-500 placeholder:uppercase   focus:outline-none focus:ring focus:ring-neutral-400  focus:ring-offset-2 xl:w-[350px] xl:text-lg"
            type="text"
            id="name"
            placeholder="Type name"
            {...register("name", { required: "This field is required" })}
          />
        </FormRow>
        <FormRow error={errors?.unitPrice?.message} label="Price">
          <input
            disabled={isPending}
            placeholder="Type unit price"
            type="number"
            id="unitPrice"
            className="w-[300px] rounded-lg border border-neutral-800 px-6 py-3 text-base duration-500 placeholder:uppercase   focus:outline-none focus:ring focus:ring-neutral-400  focus:ring-offset-2 xl:w-[350px] xl:text-lg"
            {...register("unitPrice", {
              required: "This field is required",
              min: {
                value: 1,
                message: "Price should be minimum 1",
              },
              pattern: {
                value: /^(?!0)/,
                message: "Price can not start with 0.",
              },
            })}
          />
        </FormRow>
        <FormRow label="Ingredients">
          <textarea
            disabled={isPending}
            placeholder="Each ingredient separated by coma, Example: tomato,basil,mozzarela"
            className="h-[125px] w-[300px] rounded-lg border border-neutral-800 px-2 py-1 text-base duration-500 placeholder:uppercase  focus:outline-none focus:ring focus:ring-neutral-400  focus:ring-offset-2 xl:w-[350px] xl:text-lg"
            type="text"
            id="ingredients"
            {...register("ingredients")}
          />
        </FormRow>
      </div>
      <div className="space-x-4 py-4 text-center">
        <Button
          disabled={isPending}
          onClick={(e) => {
            e.preventDefault();
            reset();
            onCloseModal();
          }}
          type="reset"
          variation="danger"
        >
          Cancel
        </Button>
        <Button disabled={isPending} variation="primary">
          Submit
        </Button>
      </div>
    </form>
  );
}

export default AddMenuItemForm;
