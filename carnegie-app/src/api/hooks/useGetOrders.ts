import { useQuery } from "@tanstack/react-query";
import ordersEndpoints from "../orders.endpoints";

const queryKey = ["orders"];

const useGetOrders = () => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const response = await ordersEndpoints.getAllOrders();
      return response;
    },
  });
};

export default useGetOrders;
