import { Instrument, Order } from "../api/types";

export const hours = (amount: number) => {
  return 1000 * 60 * 60 * amount;
};

export const findMatchingInstrument = (
  order: Order,
  instruments: Instrument[]
) => {
  const matching =
    instruments.find((instrument) => order.instrumentId === instrument.id) ||
    ({} as Instrument);

  return matching;
};

export const fuzzySearch = <T extends object>(
  query: string,
  items: T[]
): T[] => {
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
  return new Intl.DateTimeFormat("en-US", {
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
