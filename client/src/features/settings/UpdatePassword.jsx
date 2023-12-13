import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import SpinnerMini from "../../ui/SpinnerMini";
import { useUpdateUserPassword } from "./useUpdateUserPassword";
import { useForm } from "react-hook-form";
function UpdatePassword() {
  const { handleSubmit, register, getValues, reset, formState } = useForm();
  const { errors } = formState;
  const { updateUserPassword, isUpdating } = useUpdateUserPassword();
  function onSubmit({ password, confirmPassword }) {
    console.log({ password, confirmPassword });
    updateUserPassword(
      { password, confirmPassword },
      { onSettled: () => reset() },
    );
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormRow error={errors?.password?.message} label="Change password">
        <input
          className="w-[300px] rounded-lg border border-neutral-800 px-6 py-3 text-base duration-500 placeholder:uppercase   focus:outline-none focus:ring focus:ring-neutral-400  focus:ring-offset-2 xl:w-[350px] xl:text-lg"
          id="password"
          placeholder="Type your new password"
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
              message:
                "Password must contain at least 1 capital letter, 1 number, and 1 special character.",
            },
          })}
        />
      </FormRow>
      <FormRow
        error={errors?.confirmPassword?.message}
        label="Confirm new password"
      >
        <input
          className="w-[300px] rounded-lg border border-neutral-800 px-6 py-3 text-base duration-500 placeholder:uppercase   focus:outline-none focus:ring focus:ring-neutral-400  focus:ring-offset-2 xl:w-[350px] xl:text-lg"
          id="confirmPassword"
          type="password"
          placeholder="Confirm new password"
          {...register("confirmPassword", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        />
      </FormRow>
      <div className="mt-3 text-end">
        <Button variation="primary">
          {isUpdating ? <SpinnerMini /> : "Update"}
        </Button>
      </div>
    </form>
  );
}

export default UpdatePassword;
