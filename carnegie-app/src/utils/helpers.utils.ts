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

  return matching;
};

export const fuzzySearch = (query: string, items: any[]): any[] => {
  if (!query) return items;

  const lowercaseQuery = query.toLowerCase();
  return items.filter((item) => {
    return Object.values(item).some((value) => {
      if (typeof value === "string" || typeof value === "number") {
        return value.toString().toLowerCase().includes(lowercaseQuery);
      }
      return false;
    });
  });
};

export const formattedDate = (date: Date) => {
  return new Intl.DateTimeFormat("sv-SE", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

export const truncateText = (text: string, maxLength: number = 25) => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};
