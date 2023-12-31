import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateOrderStatus } from "../services/apiOrder";
import toast from "react-hot-toast";

export function useUpdateOrderStatus() {
  const queryClient = useQueryClient();
  const { mutate: updateOrder, isPending: isUpdating } = useMutation({
    mutationFn: ({ id, newStatus }) => updateOrderStatus({ id, newStatus }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["orders"],
      });
      toast.success("Order successfully updated");
    },
    onError: () => {
      toast.error("Order could not be served");
    },
  });
  return { updateOrder, isUpdating };
}
