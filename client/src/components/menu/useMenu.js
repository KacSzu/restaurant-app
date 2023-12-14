import { useQuery } from "@tanstack/react-query";
import { getMenu } from "../../services/apiMenu";
import { useSearchParams } from "react-router-dom";

export function useMenu() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || null;
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
  const filter = !category ? null : `?category=${category}&page=${page}`;
  console.log(page);
  const { data: menu, isLoading } = useQuery({
    queryFn: () => getMenu(filter),
    queryKey: ["menu", category, page],
  });
  return { menu, isLoading };
}
