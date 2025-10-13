export type Action = "buy" | "sell";

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

export type OrdersResponse = {
  error: string | null;
  items: Order[];
};

export type Instrument = {
  id: number;
  ticker: string;
  name: string;
};

export type InstrumentsResponse = {
  error: string | null;
  items: Instrument[];
};
