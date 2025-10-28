import apiClient from "./apiClient";
import {
  CreateOrderDTO,
  Order,
  OrderDTO,
  OrdersResponseDTO,
  UpdateOrderDTO,
} from "./dtos/order.dto";

const ordersEndpoints = {
  getAllOrders: async (): Promise<OrderDTO[]> => {
    try {
      const { data } = await apiClient.get<OrdersResponseDTO>("/orders");
      return data.items;
    } catch (error) {
      throw new Error("Failed to fetch orders");
    }
  },
  addOrder: async (order: CreateOrderDTO): Promise<Order> => {
    try {
      const { data } = await apiClient.post<Order>("/orders", order);
      return data;
    } catch (error) {
      throw error;
    }
  },
  editOrder: async (
    id: OrderDTO["id"],
    order: UpdateOrderDTO
  ): Promise<Order> => {
    try {
      const { data } = await apiClient.put<Order>(`/orders/${id}`, order);
      return data;
    } catch (error) {
      throw error;
    }
  },
  deleteOrder: async (id: OrderDTO["id"]) => {
    try {
      await apiClient.delete<Order>(`/orders/${id}`);
    } catch (error) {
      throw error;
    }
  },
};

export default ordersEndpoints;
