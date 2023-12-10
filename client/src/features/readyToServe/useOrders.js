import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/apiOrder";

export function useOrders(status) {
  const { data: orders, isLoading } = useQuery({
    queryFn: () => getOrders(status),
    queryKey: ["orders", status],
  });
  return { orders, isLoading };
}
