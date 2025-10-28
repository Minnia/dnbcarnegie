import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import {
  InstrumentsNavigationProp,
  OrderScreenParamList,
} from "../../navigation.types";
import useDeleteOrder from "../../../api/hooks/orders/useDeleteOrder";
import { Alert } from "react-native";
import useGetInstruments from "../../../api/hooks/instruments/useGetInstruments";
import { findMatchingInstrument } from "../../../utils/helpers.utils";
import useOrder from "../../../api/hooks/orders/useOrder";

const useOrderScreen = () => {
  const {
    params: { orderId },
  } = useRoute<RouteProp<OrderScreenParamList>>();
  const { navigate, goBack } = useNavigation<InstrumentsNavigationProp>();
  const { mutateAsync: deleteOrder } = useDeleteOrder(orderId);
  const order = useOrder(orderId);

  const handleDelete = async () => {
    try {
      await deleteOrder();
      goBack();
    } catch (error) {
      Alert.alert("Error", "Failed to delete the order. Please try again.");
    }
  };

  const { data: instruments } = useGetInstruments();
  const instrument = findMatchingInstrument(order!, instruments || []);

  return {
    instrument,
    order,
    handleDelete,
    navigate,
  };
};

export default useOrderScreen;
