import Button from "../../ui/Button";
import SettingsRow from "./SettingsRow";

function UpdatePassword() {
  return (
    <form className="space-y-4">
      <SettingsRow label="Change password">
        <input
          id="password"
          placeholder="Type your new password"
          type="password"
          className="w-[300px] rounded-lg border border-neutral-800 px-6 py-3 text-base   duration-500 placeholder:uppercase focus:outline-none  focus:ring focus:ring-neutral-400 focus:ring-offset-2"
        />
      </SettingsRow>
      <SettingsRow label="Confirm new password">
        <input
          id="email"
          placeholder="Type your new email"
          className="w-[300px] rounded-lg border border-neutral-800 px-6 py-3 text-base   duration-500 placeholder:uppercase focus:outline-none  focus:ring focus:ring-neutral-400 focus:ring-offset-2"
        />
      </SettingsRow>
      <div className="mt-3 text-end">
        <Button variation="primary">Update</Button>
      </div>
    </form>
  );
}

export default UpdatePassword;
