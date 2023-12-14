import Logo from "../components/ui/Logo";
import LoginForm from "../components/authentication/LoginForm";

function Login() {
  return (
    <section className="mx-auto h-screen w-full pt-16 xl:pt-32 ">
      <Logo />
      <LoginForm />
    </section>
  );
}

export default Login;
