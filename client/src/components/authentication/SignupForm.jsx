import Button from "../ui/Button";
import FormRow from "../ui/FormRow";
import SpinnerMini from "../ui/SpinnerMini";
import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";
function SignupForm() {
  const { signup, isPending } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  function onSubmit({ firstName, email, password, role }) {
    signup(
      { firstName, email, password, role },
      {
        onSettled: () => {
          reset();
        },
      },
    );
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="my-auto flex h-screen flex-col items-center justify-center gap-5"
    >
      <FormRow error={errors?.email?.message} label="E-mail">
        <input
          disabled={isPending}
          className="w-[300px] rounded-lg border border-neutral-800 px-6 py-3 text-base duration-500 placeholder:uppercase   focus:outline-none focus:ring focus:ring-neutral-400  focus:ring-offset-2 xl:w-[350px] xl:text-lg"
          id="email"
          placeholder="Type your e-mail"
          type="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRow>
      <FormRow label="Password" error={errors?.password?.message}>
        <input
          disabled={isPending}
          className="w-[300px] rounded-lg border border-neutral-800 px-6 py-3 text-base duration-500 placeholder:uppercase   focus:outline-none focus:ring focus:ring-neutral-400  focus:ring-offset-2 xl:w-[350px] xl:text-lg"
          id="password"
          placeholder="Type your password"
          type="password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
            pattern: {
              value:
                /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
              message: "Password is too weak.",
            },
          })}
        />
      </FormRow>
      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <input
          disabled={isPending}
          className="w-[300px] rounded-lg border border-neutral-800 px-6 py-3 text-base duration-500 placeholder:uppercase   focus:outline-none focus:ring focus:ring-neutral-400  focus:ring-offset-2 xl:w-[350px] xl:text-lg"
          id="passwordConfirm"
          placeholder="Confirm your password"
          type="password"
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        />
      </FormRow>
      <FormRow error={errors?.firstName?.message} label="First name">
        <input
          disabled={isPending}
          className="w-[300px] rounded-lg border border-neutral-800 px-6 py-3 text-base duration-500 placeholder:uppercase   focus:outline-none focus:ring focus:ring-neutral-400  focus:ring-offset-2 xl:w-[350px] xl:text-lg"
          id="firstName"
          placeholder="Type first name"
          type="text"
          {...register("firstName", { required: "This field is required" })}
        />
      </FormRow>
      <FormRow label="Role">
        <select
          {...register("role", { required: "This field is required" })}
          className="w-[300px] rounded-lg border border-neutral-800 px-6 py-3 text-base  duration-500  focus:outline-none focus:ring focus:ring-neutral-400  focus:ring-offset-2 xl:w-[350px] xl:text-lg"
          id="userRole"
          disabled={isPending}
        >
          <option value="waiter">Waiter</option>
          <option value="kitchen">Kitchen</option>
          <option value="admin">Admin</option>
        </select>
      </FormRow>
      <div className="mt-6  space-x-6">
        <Button
          disabled={isPending}
          onClick={(e) => {
            e.preventDefault();
            reset();
          }}
          variation="danger"
          type="reset"
        >
          Cancel
        </Button>
        <Button disabled={isPending} variation="primary">
          {!isPending ? "Create new user" : <SpinnerMini />}
        </Button>
      </div>
    </form>
  );
}

export default SignupForm;
