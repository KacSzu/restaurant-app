import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserPassword as updateUserPasswordApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
export function useUpdateUserPassword() {
  const queryClient = useQueryClient();
  const { mutate: updateUserPassword, isPending: isUpdating } = useMutation({
    mutationFn: ({ password, confirmPassword }) =>
      updateUserPasswordApi({ password, confirmPassword }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("Password changed successfully");
    },
    onError: () => {
      toast.error("Could not change password");
    },
  });
  return { updateUserPassword, isUpdating };
}
