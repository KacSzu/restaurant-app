import { useState } from "react";
import Button from "../ui/Button";
import FormRow from "../ui/FormRow";
import { useLogin } from "./useLogin";
import SpinnerMini from "../ui/SpinnerMini";
import Input from "../ui/Input";
import Error from "../ui/Error";
import Loader from "../ui/Loader";
function LoginForm() {
  const { login, isPending, error } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
  if (isPending) return <Loader />;
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center gap-4 pt-16"
    >
      <FormRow label="E-mail">
        <Input
          disabled={isPending}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          id="email"
          placeholder="Type your e-mail"
          type="email"
        />
      </FormRow>
      <FormRow label="Password">
        <Input
          disabled={isPending}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          id="password"
          placeholder="Type your password"
          type="password"
        />
      </FormRow>
      <div>{error ? <Error>{error}</Error> : null}</div>
      <div className="mt-3">
        <Button disabled={isPending} variation="primary">
          {!isPending ? "Log in" : <SpinnerMini />}
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
