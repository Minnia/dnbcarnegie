import { useMutation } from "@tanstack/react-query";
import ordersEndpoints from "../../orders.endpoints";
import { queryClient } from "../../../integrations";
import { OrderDTO } from "../../dtos/order.dto";

const useEditOrder = (id: number) => {
  const mutation = useMutation({
    mutationFn: async (order: OrderDTO) => {
      const response = await ordersEndpoints.editOrder(id, order);
      return response;
    },
    onError: (error) => {
      queryClient.invalidateQueries({ queryKey: ["order", id] });
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["order", id] });
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  return mutation;
};

export default useEditOrder;
