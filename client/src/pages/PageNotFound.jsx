import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="mb-4 text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg">
        The page you are looking for might be under construction or does not
        exist.
      </p>
      <button className="text-lg" onClick={() => navigate("/login")}>
        <span className="text-2xl"> &larr; </span> Go back
      </button>
    </div>
  );
}

export default PageNotFound;
