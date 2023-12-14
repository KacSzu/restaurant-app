import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMenuSoldOut } from "../../services/apiMenu";
import toast from "react-hot-toast";

export function useUpdateMenuSoldOut() {
  const queryClient = useQueryClient();
  const { mutate: updateMenuItem, isPending } = useMutation({
    mutationFn: ({ id, newSoldOut }) => updateMenuSoldOut({ id, newSoldOut }),
    onSuccess: () => {
      toast.success("Menu item successfully updated");
      queryClient.invalidateQueries({ queryKey: ["menu"] });
    },
  });
  return { updateMenuItem, isPending };
}
