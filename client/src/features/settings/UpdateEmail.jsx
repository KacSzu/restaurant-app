import Button from "../../ui/Button";
import SettingsRow from "./SettingsRow";

function UpdateEmail() {
  return (
    <form>
      <SettingsRow label="Change email">
        <input
          id="email"
          placeholder="Type your new email"
          className="w-[300px] rounded-lg border duration-500 focus:outline-none focus:ring focus:ring-neutral-400   focus:ring-offset-2 border-neutral-800 px-6  py-3 text-base placeholder:uppercase"
        />
      </SettingsRow>
      <div className="mt-3 text-end">
        <Button variation="primary">Update</Button>
      </div>
    </form>
  );
}

export default UpdateEmail;
