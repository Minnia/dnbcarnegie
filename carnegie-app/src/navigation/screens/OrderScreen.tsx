import { Button, Text, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Order } from "../../api/types";
import Instrument from "../../components/Instrument";
import { SafeAreaView } from "react-native-safe-area-context";

type OrderScreenParamList = {
  OrderScreen: {
    order: Order;
  };
};

const OrderScreen = () => {
  const {
    params: { order },
  } = useRoute<RouteProp<OrderScreenParamList, "OrderScreen">>();
  return <Instrument order={order} />;
};

export default OrderScreen;
