import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/apiOrder";
import { useSearchParams } from "react-router-dom";

export function useOrders(status) {
  const [searchParams] = useSearchParams();

  const lastDays = searchParams.get("last") || 7;
  const filter = `?last=${lastDays}`;
  const { data: orders, isLoading } = useQuery({
    queryFn: () => getOrders(status, filter),
    queryKey: ["orders", status, `last-${lastDays}`],
  });
  return { orders, isLoading, lastDays };
}
