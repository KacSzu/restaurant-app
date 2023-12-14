import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "./userSlice";
import { useState } from "react";

export function useLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      if (!user) {
        setError("Email or password are wrong");
        return;
      }

      localStorage.setItem("user", JSON.stringify(user?.data));
      dispatch(loginUser(user?.data));
      toast.success("Successfully logged in");
      navigate("/", { replace: true });
    },
    onError: () => {
      toast.error("Email or password are incorrect");
    },
  });
  return { login, isPending, error };
}
