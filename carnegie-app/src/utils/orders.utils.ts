import { Order } from "../api/types";

export const groupOrdersByMonth = (orders: Order[] | null | undefined) => {
  if (!orders) return [];

  const grouped = orders.reduce(
    (acc: { title: string; data: Order[]; sortDate: Date }[], order: Order) => {
      const monthYear = new Date(order.updatedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      });

      const existing = acc.find((section) => section.title === monthYear);
      if (existing) {
        existing.data.push(order);
      } else {
        acc.push({
          title: monthYear,
          data: [order],
          sortDate: new Date(order.updatedAt),
        });
      }
      return acc;
    },
    []
  );

  return grouped.sort((a, b) => b.sortDate.getTime() - a.sortDate.getTime());
};
