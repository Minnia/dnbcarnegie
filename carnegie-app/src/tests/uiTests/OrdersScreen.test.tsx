import { render, screen } from "@testing-library/react-native";
import OrdersScreen from "../../navigation/screens/OrdersScreen";
import { useQuery } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";
import { Order } from "../../api/types";

jest.mock("@tanstack/react-query", () => ({
  ...jest.requireActual("@tanstack/react-query"),
  useQuery: jest.fn(),
}));

describe("OrdersScreen", () => {
  const orders = [
    {
      id: 1,
      action: "buy",
      amount: 10,
      price: 100,
      instrumentId: 1,
      updatedAt: "2025-10-15T10:00:00.000Z",
      createdAt: "202-10-10T10:00:00.000Z",
    },
    {
      id: 2,
      action: "sell",
      amount: 5,
      price: 200,
      instrumentId: 2,
      updatedAt: "2024-08-16T10:00:00.000Z",
      createdAt: "2024-08-10T10:00:00.000Z",
    },
  ] as Order[];

  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should render section headers for each month", () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: orders,
      isLoading: false,
      isError: false,
    });
    render(
      <NavigationContainer>
        <OrdersScreen />
      </NavigationContainer>
    );

    expect(screen.getByText("August 2024")).toBeTruthy();
    expect(screen.getByText("October 2025")).toBeTruthy();
  });
});
