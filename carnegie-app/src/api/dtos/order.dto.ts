import { Action, BaseResponse } from "./common.dto";

export type Order = {
  id: number;
  instrumentId: number;
  amount: number;
  price: number;
  action: Action;
  updatedAt: string;
  createdAt: string;
};

export interface OrderDTO {
  id: number;
  instrumentId: number;
  amount: number;
  price: number;
  action: Action;
  updatedAt: string;
  createdAt: string;
}

export interface CreateOrderDTO {
  instrumentId: number;
  amount: number;
  price: number;
  action: Action;
}

export interface UpdateOrderDTO extends CreateOrderDTO {}

export interface OrdersResponseDTO extends BaseResponse {
  items: OrderDTO[];
}
