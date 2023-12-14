import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import { logoutUser } from "../authentication/userSlice";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate("");
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(logoutUser());
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    navigate("/login");
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
