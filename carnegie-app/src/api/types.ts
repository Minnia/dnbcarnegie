// TODO: look at making DTOs

export type Action = "buy" | "sell";

export interface BaseResponse {
  error: string | null;
}

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
  item: OrderDTO[];
}

export interface InstrumentDTO {
  id: number;
  ticker: string;
  name: string;
}

export interface InstrumentsResponseDTO extends BaseResponse {
  items: InstrumentDTO[];
}

// DTOs above

export type Order = {
  id: number;
  instrumentId: number;
  amount: number;
  price: number;
  action: Action;
  updatedAt: string;
  createdAt: string;
};

export type OrderRequest = {
  instrumentId: number;
  amount: number;
  price: number;
  action: Action;
};

export interface OrderResponse {
  error: string | null;
  item: Order;
}

export interface OrdersResponse extends OrderResponse {
  items: Order[];
}

export type Instrument = {
  id: number;
  ticker: string;
  name: string;
};

export type InstrumentsResponse = {
  error: string | null;
  items: Instrument[];
};
