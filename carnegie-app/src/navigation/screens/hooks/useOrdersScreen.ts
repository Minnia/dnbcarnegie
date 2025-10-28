import { useNavigation } from "@react-navigation/native";
import useGetOrders from "../../../api/hooks/orders/useGetOrders";
import { OrderScreenNavigationProp } from "../../navigation.types";
import { useMemo } from "react";
import { groupOrdersByMonth } from "../../../utils/orders.utils";

const useOrdersScreen = () => {
  const { data: orders } = useGetOrders();
  const { navigate } = useNavigation<OrderScreenNavigationProp>();

  const sections = useMemo(() => groupOrdersByMonth(orders), [orders]);

  return {
    navigate,
    sections,
  };
};

export default useOrdersScreen;
