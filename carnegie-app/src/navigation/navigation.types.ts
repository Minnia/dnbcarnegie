import { StackNavigationProp } from "@react-navigation/stack";
import { Instrument, Order } from "../api/types";
import { Screens } from "./screen.types";

export type OrderScreenParamList = {
  [Screens.ORDER_DETAILS]: {
    order: Order;
  };
};

export type OrderStackParamList = {
  [Screens.INSTRUMENTS]: {
    instrument: Instrument;
    order: Order;
  };

  [Screens.ORDER_FORM]: {
    order?: Order;
    instrument: Instrument;
  };
};

export type CreateOrderStackParamList = {
  [Screens.ORDER_FORM]: {
    instrument: Instrument;
  };
};

export type OrderManagementStackNavigationProp =
  StackNavigationProp<OrderStackParamList>;

export type OrderScreenNavigationProp =
  StackNavigationProp<OrderScreenParamList>;

export type InstrumentStackParamList =
  StackNavigationProp<CreateOrderStackParamList>;
