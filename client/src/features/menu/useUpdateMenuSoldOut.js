import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMenuSoldOut } from "../../services/apiMenu";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

export function useUpdateMenuSoldOut() {
  const [searchParams] = useSearchParams();
  const status = searchParams.get("category") || null;
  const queryClient = useQueryClient();
  const { mutate: updateMenuItem, isPending } = useMutation({
    mutationFn: ({ id, newSoldOut }) => updateMenuSoldOut({ id, newSoldOut }),
    onSuccess: (data) => {
      console.log(data);
      toast.success("Menu item successfully updated");
      queryClient.invalidateQueries({ queryKey: ["menu", status] });
    },
  });
  return { updateMenuItem, isPending };
}
