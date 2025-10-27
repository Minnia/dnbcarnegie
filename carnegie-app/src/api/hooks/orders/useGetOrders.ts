import { useQuery } from "@tanstack/react-query";
import ordersEndpoints from "../../orders.endpoints";
import { queryClient } from "../../../integrations";

const queryKey = ["orders"];

const useGetOrders = () => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      try {
        const response = await ordersEndpoints.getAllOrders();
        queryClient.setQueryData(queryKey, response);
        return response;
      } catch (error) {
        throw error;
      }
    },
  });
};

export default useGetOrders;
