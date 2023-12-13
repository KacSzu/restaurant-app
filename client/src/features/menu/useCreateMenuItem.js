import { useMutation } from "@tanstack/react-query";
import { createMenuItem as createMenuItemApi } from "../../services/apiMenu";
import toast from "react-hot-toast";
export function useCreateMenuItem() {
  const { mutate: createMenuItem, isPending } = useMutation({
    mutationFn: (newItem) => createMenuItemApi(newItem),
    onSuccess: (data) => {
      console.log(data);
      toast.success("New item created successfully");
    },
    onError: () => {
      toast.error("Could not create new item");
    },
  });
  return { createMenuItem, isPending };
}
