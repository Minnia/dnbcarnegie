import { useState } from "react";
import useCreateOrder from "../api/hooks/useCreateOrder";
import useEditOrder from "../api/hooks/useEditOrder";
import { Action, Instrument, Order } from "../api/types";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

const useOrderForm = (order: Order, instrumentId: Instrument["id"]) => {
  const editMode = !!order.id;

  const { mutateAsync: updateOrder } = useEditOrder(order?.id || 0);
  const { mutateAsync: createOrder } = useCreateOrder();

  const [amount, setAmount] = useState<string>(order?.amount?.toString() || "");
  const [price, setPrice] = useState<string>(order?.price?.toString() || "");
  const [action, setAction] = useState<Action>(order?.action || "buy");

  const { goBack } = useNavigation();

  const handleOrder = async () => {
    try {
      if (editMode) {
        await updateOrder({
          ...order,
          amount: parseFloat(amount),
          price: parseFloat(price),
          action,
        });
        goBack();
      } else {
        await createOrder({
          instrumentId,
          amount: parseFloat(amount),
          price: parseFloat(price),
          action: "buy",
        });
        goBack();
      }
    } catch (error) {
      Alert.alert(
        "Error",
        `Failed to ${
          editMode ? "update" : "create"
        } the order. Please try again.`
      );
    }
  };
  return {
    amount,
    setAmount,
    price,
    setPrice,
    action,
    setAction,
    handleOrder,
    editMode,
  };
};

export default useOrderForm;
