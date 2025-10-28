import { useMutation } from "@tanstack/react-query";
import ordersEndpoints from "../../orders.endpoints";
import { queryClient } from "../../../integrations";
import { OrderDTO } from "../../dtos/order.dto";

const useDeleteOrder = (id: OrderDTO["id"]) => {
  const queryKey = ["orders", "delete", id];
  const mutation = useMutation({
    mutationKey: queryKey,
    mutationFn: async () => {
      return ordersEndpoints.deleteOrder(id);
    },
    onError: (error) => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
  return mutation;
};

export default useDeleteOrder;
