import Logo from "../ui/Logo";
import LoginForm from "../features/authentication/LoginForm";

function Login() {
  return (
    <section className="mx-auto h-screen w-full pt-16 xl:pt-32 ">
      <Logo />
      <LoginForm />
    </section>
  );
}

export default Login;
