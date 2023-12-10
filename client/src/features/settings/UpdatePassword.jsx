import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

function UpdatePassword() {
  return (
    <form className="space-y-4">
      <FormRow label="Change password">
        <Input
          id="password"
          placeholder="Type your new password"
          type="password"
        />
      </FormRow>
      <FormRow label="Confirm new password">
        <Input
          id="newPassword"
          type="password"
          placeholder="Confirm new password"
        />
      </FormRow>
      <div className="mt-3 text-end">
        <Button variation="primary">Update</Button>
      </div>
    </form>
  );
}

export default UpdatePassword;
