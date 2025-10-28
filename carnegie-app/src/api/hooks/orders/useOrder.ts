import { Order } from "../../types";
import useGetOrders from "./useGetOrders";

const useOrder = (orderId: Order["id"]) => {
  const { data: orders } = useGetOrders();
  if (!orders) {
    return undefined;
  }

  const order = orders.find((order) => order.id === orderId);
  if (!order) {
    return undefined;
  }
  return order;
};

export default useOrder;
