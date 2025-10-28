import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import useGetOrders from "../../../api/hooks/orders/useGetOrders";
import {
  InstrumentsNavigationProp,
  OrderScreenParamList,
} from "../../navigation.types";
import useDeleteOrder from "../../../api/hooks/orders/useDeleteOrder";
import { Alert } from "react-native";
import useGetInstruments from "../../../api/hooks/instruments/useGetInstruments";
import { findMatchingInstrument } from "../../../utils/helpers.utils";

const useOrderScreen = () => {
  const {
    params: { order },
  } = useRoute<RouteProp<OrderScreenParamList>>();
  const { navigate, goBack } = useNavigation<InstrumentsNavigationProp>();
  const { mutateAsync: deleteOrder } = useDeleteOrder(order.id);

  const handleDelete = async () => {
    try {
      await deleteOrder();
      goBack();
    } catch (error) {
      Alert.alert("Error", "Failed to delete the order. Please try again.");
    }
  };

  const { data: instruments } = useGetInstruments();
  const instrument = findMatchingInstrument(order, instruments || []);
  const { data: orders } = useGetOrders();

  const cachedOrder = orders?.find((o) => o.id === order.id) || order;

  return {
    instrument,
    cachedOrder,
    handleDelete,
    navigate,
  };
};

export default useOrderScreen;
