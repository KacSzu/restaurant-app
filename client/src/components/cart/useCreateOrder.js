import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrder as createOrderApi } from "../../services/apiOrder";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTableNumber } from "./cartSlice";
import toast from "react-hot-toast";
import { getCurrentUser } from "../authentication/userSlice";
export function useCreateOrder() {
  const queryClient = useQueryClient();
  const user = useSelector(getCurrentUser);
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const tableNumber = useSelector(getTableNumber);
  const { mutate: createOrder, isPending } = useMutation({
    mutationFn: () => createOrderApi(cart, tableNumber),
    onSuccess: () => {
      toast.success("Order successfully created");
      dispatch(clearCart());
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
    onError: () => {
      toast.error("Order could not be created");
    },
  });
  if (user) {
    return { createOrder, isPending };
  }
}
