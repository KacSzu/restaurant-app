import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <p className="text-lg">
        I am very happy that you are checking my application, I hope you like
        it.💗
      </p>
      <button className="text-lg" onClick={() => navigate("/login")}>
        <span className="text-2xl"> &larr; </span> Go to login page
      </button>
    </div>
  );
}
export default Homepage;
