import { useQuery } from "@tanstack/react-query";
import { getOrdersByStatus } from "../../services/apiOrder";

export function useGetOrdersByStatus(status) {
  const { data: orders, isLoading } = useQuery({
    queryFn: () => getOrdersByStatus(status),
    queryKey: ["orders", status],
  });
  return { orders, isLoading };
}
