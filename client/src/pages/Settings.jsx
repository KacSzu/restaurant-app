import Logout from "../features/settings/Logout";
import UpdateUserData from "../features/settings/UpdateUserData";

function Settings() {
  return (
    <div>
      <h2 className="my-16 text-center text-2xl font-thin">Hello, $name</h2>
      <UpdateUserData />
      <Logout />
    </div>
  );
}

export default Settings;
