import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrder as createOrderApi } from "../../services/apiOrder";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import toast from "react-hot-toast";
export function useCreateOrder() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const cart = useSelector(getCart);
  const { mutate: createOrder, isLoading: isCreating } = useMutation({
    mutationFn: () => createOrderApi(cart),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: "orders" });
      toast.success("Order successfully created");
      dispatch(clearCart());
    },
    onError: () => {
      toast.error("Order could not be created");
    },
  });
  return { createOrder, isCreating };
}
