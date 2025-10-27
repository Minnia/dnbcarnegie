import apiClient from "./apiClient";
import { Order, OrderRequest, OrderResponse, OrdersResponse } from "./types";

const ordersEndpoints = {
  getAllOrders: async (): Promise<Order[]> => {
    try {
      const { data } = await apiClient.get<OrdersResponse>("/orders");
      return data.items;
    } catch (error) {
      throw new Error("Failed to fetch orders");
    }
  },
  addOrder: async (order: OrderRequest): Promise<OrderResponse> => {
    try {
      const { data } = await apiClient.post<OrderResponse>("/orders", order);
      return data;
    } catch (error) {
      throw error;
    }
  },
  editOrder: async (
    id: Order["id"],
    order: OrderRequest
  ): Promise<OrderResponse> => {
    try {
      const { data } = await apiClient.put<OrderResponse>(
        `/orders/${id}`,
        order
      );
      return data;
    } catch (error) {
      throw error;
    }
  },
  deleteOrder: async (id: Order["id"]) => {
    try {
      await apiClient.delete<Order>(`/orders/${id}`);
    } catch (error) {
      throw error;
    }
  },
};

export default ordersEndpoints;
