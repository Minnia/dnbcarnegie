import apiClient from "./apiClient";
import { Order, OrderRequest, OrdersResponse } from "./types";

const ordersEndpoints = {
  getAllOrders: async (): Promise<Order[]> => {
    try {
      const { data } = await apiClient.get<OrdersResponse>("/orders");
      return data.items;
    } catch (error) {
      throw new Error("Failed to fetch orders");
    }
  },
  addOrder: async (order: OrderRequest) => {
    try {
      const { data } = await apiClient.post<OrderRequest>("/orders", order);
      console.log("posted data", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  editOrder: async (id: Order["id"], order: OrderRequest) => {
    try {
      const { data } = await apiClient.put<OrderRequest>(
        `/orders/${id}`,
        order
      );
      console.log("edited order", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  deleteOrder: async (id: Order["id"]) => {
    try {
      const order = await apiClient.delete(`/orders/${id}`);
      console.log("deleted order", order);
      return order;
    } catch (error) {
      console.log(error);
    }
  },
};

export default ordersEndpoints;
