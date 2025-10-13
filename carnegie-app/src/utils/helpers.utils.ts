import { Instrument, Order } from "../api/types";

export const hours = (amount: number) => {
  return 1000 * 60 * 60 * amount;
};

export const findMatchingInstrument = (
  order: Order,
  instruments: Instrument[]
) => {
  const matching = instruments?.find(
    (instrument) => order.instrumentId === instrument.id
  );
  console.log("Matching result:", matching);
  return matching;
};
