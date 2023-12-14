import { useSelector } from "react-redux";
import Logout from "../components/settings/Logout";
import UpdateUserData from "../components/settings/UpdateUserData";
import { getCurrentUser } from "../components/authentication/userSlice";

function Settings() {
  const user = useSelector(getCurrentUser);
  return (
    <section>
      <h2 className="my-16 text-center text-2xl font-thin xl:my-24 xl:text-3xl">
        Hello, {user.firstName}
      </h2>
      <UpdateUserData />
      <Logout />
    </section>
  );
}

export default Settings;
