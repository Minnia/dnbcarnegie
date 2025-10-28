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

export type Instrument = {
  id: number;
  ticker: string;
  name: string;
};
