import { RouteProp, useRoute } from "@react-navigation/native";
import OrderForm from "../forms/OrderForm";
import { Suspense } from "react";
import { Text } from "react-native";
import { Instrument, Order } from "../api/types";

type OrderFormScreenParamsList = {
  OrderFormScreen: {
    order?: Order;
    instrument: Instrument;
  };
};

const OrderFormScreen = () => {
  const {
    params: { order, instrument },
  } = useRoute<RouteProp<OrderFormScreenParamsList, "OrderFormScreen">>();
  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <OrderForm order={order} instrument={instrument} />
    </Suspense>
  );
};

export default OrderFormScreen;
