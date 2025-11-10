import { useNavigation } from "@react-navigation/native";
import useGetOrders from "../../../api/hooks/orders/useGetOrders";
import { OrderScreenNavigationProp } from "../../navigation.types";
import { useEffect, useMemo } from "react";
import { groupOrdersByMonth } from "../../../utils/orders.utils";
import Toast from "react-native-toast-message";

const useOrdersScreen = () => {
  const { data: orders, isError, error, isRefetching } = useGetOrders();
  const { navigate } = useNavigation<OrderScreenNavigationProp>();

  const sections = useMemo(() => groupOrdersByMonth(orders), [orders]);

  useEffect(() => {
    if (isError && error) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2:
          error instanceof Error ? error.message : "Failed to fetch orders",
      });
    }
  }, [isError, error]);

  return {
    navigate,
    sections,
    error,
    isError,
    isRefetching,
  };
};

export default useOrdersScreen;
