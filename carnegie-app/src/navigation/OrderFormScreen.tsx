import { RouteProp, useRoute } from "@react-navigation/native";
import { Instrument, Order } from "../api/types";
import OrderForm from "../forms/OrderForm";

type OrderFormScreenParamsList = {
  OrderFormScreen: {
    order: Order;
    instrument: Instrument;
  };
};

const OrderFormScreen = () => {
  const {
    params: { order, instrument },
  } = useRoute<RouteProp<OrderFormScreenParamsList, "OrderFormScreen">>();
  return (
    <OrderForm
      order={order}
      instrument={instrument}
      orderAction={order.action}
    />
  );
};

export default OrderFormScreen;
