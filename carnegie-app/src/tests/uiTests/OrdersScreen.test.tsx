import { render, screen, waitFor } from "@testing-library/react-native";
import OrdersScreen from "../../navigation/screens/OrdersScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Order } from "../../api/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ordersEndpoints from "../../api/orders.endpoints";

jest.mock("expo-font", () => ({
  loadAsync: jest.fn(),
  isLoaded: jest.fn(() => true),
  isLoading: jest.fn(() => false),
}));

jest.mock("react-native-toast-message", () => ({
  __esModule: true,
  default: {
    show: jest.fn(),
    hide: jest.fn(),
  },
}));

jest.mock("../../api/orders.endpoints", () => ({
  __esModule: true,
  default: {
    getAllOrders: jest.fn(),
  },
}));

const mockGetAllOrders = ordersEndpoints.getAllOrders as jest.MockedFunction<
  typeof ordersEndpoints.getAllOrders
>;

describe("OrdersScreen", () => {
  const orders = [
    {
      id: 1,
      action: "buy",
      amount: 10,
      price: 100,
      instrumentId: 1,
      updatedAt: "2025-10-15T10:00:00.000Z",
      createdAt: "2025-10-10T10:00:00.000Z",
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

  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          gcTime: 0,
        },
      },
    });
    jest.clearAllMocks();
  });

  afterEach(() => {
    queryClient.clear();
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>{children}</NavigationContainer>
    </QueryClientProvider>
  );

  it("should render an empty state if there are no orders", async () => {
    mockGetAllOrders.mockResolvedValueOnce([]);

    render(<OrdersScreen />, { wrapper });

    await waitFor(() => {
      expect(screen.getByText("No orders found")).toBeTruthy();
    });

    expect(
      screen.getByText("Place your first order to see it here")
    ).toBeTruthy();
  });

  it("should render error state when there is an error", async () => {
    mockGetAllOrders.mockRejectedValueOnce(new Error("Failed to fetch orders"));

    render(<OrdersScreen />, { wrapper });

    await waitFor(() => {
      expect(screen.getByText("Error loading orders")).toBeTruthy();
    });

    expect(screen.getByText("Failed to fetch orders")).toBeTruthy();
  });

  it("should render section headers for each month", async () => {
    mockGetAllOrders.mockResolvedValueOnce(orders);

    render(<OrdersScreen />, { wrapper });

    await waitFor(() => {
      expect(screen.getByText("August 2024")).toBeTruthy();
    });

    expect(screen.getByText("October 2025")).toBeTruthy();
  });
});
