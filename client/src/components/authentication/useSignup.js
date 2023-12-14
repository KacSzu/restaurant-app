import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: ({ email, password, firstName, role }) =>
      signupApi({ email, password, firstName, role }),
    onSuccess: () => {
      toast.success("New user created successfully");
    },
    onError: () => {
      toast.error("Could not create new user");
    },
  });
  return { signup, isPending };
}
