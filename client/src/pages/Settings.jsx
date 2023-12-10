import { useSelector } from "react-redux";
import Logout from "../features/settings/Logout";
import UpdateUserData from "../features/settings/UpdateUserData";
import { getCurrentUser } from "../features/authentication/userSlice";

function Settings() {
  const user = useSelector(getCurrentUser);
  return (
    <div>
      <h2 className="my-16 text-center text-2xl font-thin xl:my-24 xl:text-3xl">
        Hello, {user.firstName}
      </h2>
      <UpdateUserData />
      <Logout />
    </div>
  );
}

export default Settings;
