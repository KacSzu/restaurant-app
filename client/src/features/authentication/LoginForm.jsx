import { useState } from "react";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
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
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          id="email"
          placeholder="Type your e-mail"
          type="email"
          className="w-[300px] rounded-lg border border-neutral-800 px-6 py-3 text-base   duration-500 placeholder:uppercase focus:outline-none  focus:ring focus:ring-neutral-400 focus:ring-offset-2"
        />
      </FormRow>
      <FormRow label="Password">
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          id="password"
          placeholder="Type your password"
          type="password"
          className="w-[300px] rounded-lg border border-neutral-800 px-6 py-3 text-base   duration-500 placeholder:uppercase focus:outline-none  focus:ring focus:ring-neutral-400 focus:ring-offset-2"
        />
      </FormRow>
      <div></div>
      <div className="mt-3">
        <Button variation="primary">
          {!isPending ? "Log in" : <SpinnerMini />}
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
