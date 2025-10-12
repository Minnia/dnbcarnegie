import { QueryCache, QueryClient } from "@tanstack/react-query";
import { hours } from "../utils/helpers.utils";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (_, query) => {
      if (query.meta?.errorMessage) {
        console.log(query.meta.errorMessage);
      }
    },
    onSuccess: (_, query) => {
      if (query.meta?.successMessage) {
        console.log(query.meta.successMessage);
      }
    },
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: hours(1),
      throwOnError: false,
    },
  },
});
