import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const { data, isLoading } = useQuery({
    queryFn: (email) => getCurrentUser(email),
    queryKey: ["user"],
  });

  return { data, isLoading };
}
