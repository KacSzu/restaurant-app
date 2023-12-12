import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMenuItem as deleteMenuItemApi } from "../../services/apiMenu";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";

export function useDeluteMenuItem() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const category = searchParams.get("category");
  const { mutate: deleteMenuItem, isPending: isDeleting } = useMutation({
    mutationFn: (id) => deleteMenuItemApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["menu", category] });
      toast.success("Item deleted successfully");
    },
    onError: () => {
      toast.error("Could not delete item");
    },
  });
  return { deleteMenuItem, isDeleting };
}
