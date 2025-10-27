export const Screens = {
  ORDERS_LIST: "Orders",
  ORDER_DETAILS: "Your order",

  INSTRUMENTS: "Instruments",
  ORDER_FORM: "Manage your order",
} as const;

export type ScreenName = (typeof Screens)[keyof typeof Screens];
