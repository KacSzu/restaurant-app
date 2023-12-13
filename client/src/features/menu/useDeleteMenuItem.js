import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMenuItem as deleteMenuItemApi } from "../../services/apiMenu";
import toast from "react-hot-toast";

export function useDeluteMenuItem() {
  const queryClient = useQueryClient();
  const { mutate: deleteMenuItem, isPending: isDeleting } = useMutation({
    mutationFn: (id) => deleteMenuItemApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["menu"] });
      toast.success("Item deleted successfully");
    },
    onError: () => {
      toast.error("Could not delete item");
    },
  });
  return { deleteMenuItem, isDeleting };
}
