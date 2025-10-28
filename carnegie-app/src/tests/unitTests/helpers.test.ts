import { describe, it, expect } from "@jest/globals";
import {
  hours,
  findMatchingInstrument,
  formattedDate,
  fuzzySearch,
  truncateText,
} from "../../utils/helpers.utils";
import { groupOrdersByMonth } from "../../utils/orders.utils";
import { Instrument, Order } from "../../api/types";

describe("helpers", () => {
  it("should convert a number to hours", () => {
    const result = hours(2);
    expect(result).toBe(7200000);
  });
  it("should find the matching instrument of an order", () => {
    const instruments = [
      {
        id: 1,
        name: "Test Instrument",
        ticker: "TST",
      },
      {
        id: 2,
        name: "Test Instrument 2",
        ticker: "TST2",
      },
    ] as Instrument[];

    const order = {
      action: "buy",
      amount: 10,
      price: 100,
      instrumentId: 1,
    } as Order;

    const result = findMatchingInstrument(order, instruments);
    expect(result).toEqual({
      id: 1,
      name: "Test Instrument",
      ticker: "TST",
    });
  });
  it("should format a date to en-US format", () => {
    const date = new Date("2023-10-05T14:48:00.000Z");
    const result = formattedDate(date);
    expect(result).toBe("Oct 5, 02:48 PM");
  });
  it("should perform a fuzzy search on items", () => {
    const items = [
      { id: 1, name: "Apple", category: "Fruit" },
      { id: 2, name: "Banana", category: "Fruit" },
      { id: 3, name: "Carrot", category: "Vegetable" },
    ];

    const result = fuzzySearch("app", items);
    expect(result).toEqual([{ id: 1, name: "Apple", category: "Fruit" }]);
  });
  it("should truncate text longer than the max length provided", () => {
    const text =
      "This is a very long piece of text that needs to be truncated.";
    const result = truncateText(text, 20);
    expect(result).toBe("This is a very long ...");

    const shortText = "Short text";
    const shortResult = truncateText(shortText, 20);
    expect(shortResult).toBe("Short text");
  });
  it("should return an empty array when there are no months to group", () => {
    const result = groupOrdersByMonth(null);
    expect(result).toEqual([]);
  });
  it("should group orders by month", () => {
    const orders: Order[] = [
      {
        id: 1,
        instrumentId: 1,
        amount: 10,
        price: 100,
        action: "buy",
        updatedAt: "2023-10-05T14:48:00.000Z",
        createdAt: "2023-10-01T10:00:00.000Z",
      },
      {
        id: 2,
        instrumentId: 2,
        amount: 5,
        price: 50,
        action: "sell",
        updatedAt: "2023-11-15T09:30:00.000Z",
        createdAt: "2023-10-10T11:00:00.000Z",
      },
      {
        id: 3,
        instrumentId: 1,
        amount: 8,
        price: 80,
        action: "buy",
        updatedAt: "2024-02-20T16:20:00.000Z",
        createdAt: "2024-02-15T12:00:00.000Z",
      },
    ];

    const result = groupOrdersByMonth(orders);

    expect(result).toEqual([
      {
        title: "February 2024",
        data: [orders[2]],
        sortDate: new Date("2024-02-20T16:20:00.000Z"),
      },
      {
        title: "November 2023",
        data: [orders[1]],
        sortDate: new Date("2023-11-15T09:30:00.000Z"),
      },
      {
        title: "October 2023",
        data: [orders[0]],
        sortDate: new Date("2023-10-05T14:48:00.000Z"),
      },
    ]);
  });
});
