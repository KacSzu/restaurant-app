import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

function UpdateEmail() {
  return (
    <form>
      <FormRow label="Change email">
        <Input
          id="email"
          placeholder="Type your new email"
          className="w-[300px] rounded-lg border border-neutral-800 px-6 py-3 text-base duration-500   placeholder:uppercase focus:outline-none focus:ring  focus:ring-neutral-400 focus:ring-offset-2 xl:w-[350px] xl:text-lg"
        />
      </FormRow>
      <div className="mt-3 text-end">
        <Button variation="primary">Update</Button>
      </div>
    </form>
  );
}

export default UpdateEmail;
