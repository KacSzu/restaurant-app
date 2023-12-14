import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMenuItem as createMenuItemApi } from "../../services/apiMenu";
import toast from "react-hot-toast";

export function useCreateMenuItem() {
  const queryClient = useQueryClient();
  const { mutate: createMenuItem, isPending } = useMutation({
    mutationFn: (newItem) => createMenuItemApi(newItem),
    onSuccess: () => {
      toast.success("New item created successfully");
      queryClient.invalidateQueries({ queryKey: ["menu"] });
    },
    onError: () => {
      toast.error("Could not create new item");
    },
  });
  return { createMenuItem, isPending };
}
