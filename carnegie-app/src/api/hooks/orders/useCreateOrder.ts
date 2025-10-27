import { useMutation } from "@tanstack/react-query";
import { OrderRequest } from "../../types";
import ordersEndpoints from "../../orders.endpoints";
import { queryClient } from "../../../integrations";

const useCreateOrder = () => {
  const mutation = useMutation({
    mutationFn: async (order: OrderRequest) => {
      try {
        const response = await ordersEndpoints.addOrder(order);
        return response;
      } catch (error) {
        throw error;
      }
    },
    onError: (error) => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  return mutation;
};

export default useCreateOrder;
