import Logo from "../ui/Logo";
import LoginForm from "../features/authentication/LoginForm";

function Login() {
  return (
    <div className="mx-auto h-screen w-full pt-12 ">
      <Logo />
      <LoginForm />
    </div>
  );
}

export default Login;
