import { useState } from "react";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import Input from "../../ui/Input";
function LoginForm() {
  const { login, isPending } = useLogin();
  const [email, setEmail] = useState("ab@ab2c.pl");
  const [password, setPassword] = useState("Abecadło123!!");
  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
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
      <div className="mt-3">
        <Button variation="primary">
          {!isPending ? "Log in" : <SpinnerMini />}
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
