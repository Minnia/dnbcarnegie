import { QueryClient } from "@tanstack/react-query";
import { hours } from "../utils/helpers.utils";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: hours(1),
      throwOnError: false,
    },
  },
});
