import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { logoutUser } from "../authentication/userSlice";

function Logout() {
  const dispatch = useDispatch();
  function handleClick() {
    localStorage.removeItem("user");
    dispatch(logoutUser());
  }
  return (
    <div className="pt-12 text-center">
      <Button onClick={handleClick} variation="logout">
        Logout
      </Button>
    </div>
  );
}

export default Logout;
