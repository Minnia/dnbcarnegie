import { useMutation } from "@tanstack/react-query";
import { OrderRequest } from "../types";
import ordersEndpoints from "../orders.endpoints";
import { queryClient } from "../../integrations";

const useCreateOrder = () => {
  // Create order logic here
  const mutation = useMutation({
    mutationFn: async (order: OrderRequest) => {
      const response = await ordersEndpoints.addOrder(order);
      return response;
    },
    onError: (error) => {
      console.log("Error creating order:", error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  return mutation;
};

export default useCreateOrder;
