import { useQuery } from "@tanstack/react-query";
import { getMenu } from "../../services/apiMenu";
import { useSearchParams } from "react-router-dom";

export function useMenu() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || null;

  const filter = !category ? null : `?category=${category}`;

  const { data: menu, isLoading } = useQuery({
    queryFn: () => getMenu(filter),
    queryKey: ["menu", category],
  });
  return { menu, isLoading };
}
