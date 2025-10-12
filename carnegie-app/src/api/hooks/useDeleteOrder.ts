import { useMutation } from "@tanstack/react-query";
import { Order } from "../types";
import ordersEndpoints from "../orders.endpoints";
import { queryClient } from "../../integrations";

const useDeleteOrder = (id: Order["id"]) => {
  const queryKey = ["orders", "delete", id];
  const mutation = useMutation({
    mutationKey: queryKey,
    mutationFn: async () => {
      await ordersEndpoints.deleteOrder(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });
  return mutation;
};

export default useDeleteOrder;
