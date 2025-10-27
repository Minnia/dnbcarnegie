import { useMutation } from "@tanstack/react-query";
import { OrderRequest } from "../../types";
import ordersEndpoints from "../../orders.endpoints";
import { queryClient } from "../../../integrations";

const useEditOrder = (id: number) => {
  const mutation = useMutation({
    mutationFn: async (order: OrderRequest) => {
      try {
        const response = await ordersEndpoints.editOrder(id, order);
        return response;
      } catch (error) {
        throw error;
      }
    },
    onError: (error) => {
      queryClient.invalidateQueries({ queryKey: ["order", id] });
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["order", id] });
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  return mutation;
};

export default useEditOrder;
