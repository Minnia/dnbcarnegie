import { Alert } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Order } from "../../api/types";
import Instrument from "../../components/Instrument";
import useDeleteOrder from "../../api/hooks/useDeleteOrder";

type OrderScreenParamList = {
  OrderScreen: {
    order: Order;
  };
};

const OrderScreen = () => {
  const {
    params: { order },
  } = useRoute<RouteProp<OrderScreenParamList, "OrderScreen">>();
  const { goBack } = useNavigation<any>();
  const { mutateAsync: deleteOrder } = useDeleteOrder(order.id);
  const handleDelete = async () => {
    try {
      await deleteOrder();
      goBack();
    } catch (error) {
      Alert.alert("Error", "Failed to delete the order. Please try again.");
    }
  };
  // TODO: sometimes the order can't be deleted but no error is thrown
  return <Instrument handleDelete={handleDelete} order={order} />;
};

export default OrderScreen;
