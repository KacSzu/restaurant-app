import UpdateEmail from "./UpdateEmail";
import UpdatePassword from "./UpdatePassword";

function UpdateUserData() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 ">
      <UpdateEmail />
      <UpdatePassword />
    </div>
  );
}

export default UpdateUserData;
