import { Text } from "react-native";
import ListItem from "../../components/ListItem";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Order } from "../../api/types";
import Instrument from "../../components/Instrument";

type OrderScreenParamList = {
  OrderScreen: {
    order: Order;
  };
};

const OrderScreen = () => {
  const {
    params: { order },
  } = useRoute<RouteProp<OrderScreenParamList, "OrderScreen">>();
  return (
    <>
      <Text>Here you can see more details about your order</Text>
      <Text>{order.id}</Text>
      <Text>{order.action}</Text>
      <Text>{order.amount}</Text>
      <Text>{order.price}</Text>
      <Text>{order.createdAt}</Text>
      <Text>{order.updatedAt}</Text>
      <Instrument order={order} />
    </>
  );
};

export default OrderScreen;
