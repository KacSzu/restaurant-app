import { useState } from "react";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import Input from "../../ui/Input";
import Error from "../../ui/Error";
function LoginForm() {
  const { login, isPending, error } = useLogin();
  const [email, setEmail] = useState("admin@restaurant.com");
  const [password, setPassword] = useState("Admin123!");
  function handleSubmit(e) {
    e.preventDefault();

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      },
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center gap-4 pt-16"
    >
      <FormRow label="E-mail">
        <Input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          id="email"
          placeholder="Type your e-mail"
          type="email"
        />
      </FormRow>
      <FormRow label="Password">
        <Input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          id="password"
          placeholder="Type your password"
          type="password"
        />
      </FormRow>
      <div>{error ? <Error>{error}</Error> : null}</div>
      <div className="mt-3">
        <Button variation="primary">
          {!isPending ? "Log in" : <SpinnerMini />}
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
