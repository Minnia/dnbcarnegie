import { StackNavigationProp } from "@react-navigation/stack";
import { Screens } from "./screen.types";
import { Instrument, Order } from "../api/types";

export type OrderScreenParamList = {
  [Screens.ORDER_DETAILS]: {
    order: Order;
  };
};

export type InstrumentsParamList = {
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

export type InstrumentsNavigationProp =
  StackNavigationProp<InstrumentsParamList>;

export type OrderScreenNavigationProp =
  StackNavigationProp<OrderScreenParamList>;

export type InstrumentStackParamList =
  StackNavigationProp<CreateOrderStackParamList>;
