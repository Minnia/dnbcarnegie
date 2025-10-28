import { useMutation } from "@tanstack/react-query";
import ordersEndpoints from "../../orders.endpoints";
import { queryClient } from "../../../integrations";
import { CreateOrderDTO } from "../../dtos/order.dto";

const useCreateOrder = () => {
  const mutation = useMutation({
    mutationFn: async (order: CreateOrderDTO) => {
      const response = await ordersEndpoints.addOrder(order);
      return response;
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
