import { useState } from "react";
import useCreateOrder from "../api/hooks/orders/useCreateOrder";
import useEditOrder from "../api/hooks/orders/useEditOrder";

import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { Action } from "../api/dtos/common.dto";
import { Instrument, Order } from "../api/types";
import Toast from "react-native-toast-message";

const useOrderForm = (order: Order, instrumentId: Instrument["id"]) => {
  const { mutateAsync: updateOrder, error: updateOrderError } = useEditOrder(
    order.id
  );
  const { mutateAsync: createOrder } = useCreateOrder();
  const { goBack } = useNavigation();

  const [amount, setAmount] = useState<string>(order?.amount?.toString() || "");
  const [price, setPrice] = useState<string>(order?.price?.toString() || "");
  const [action, setAction] = useState<Action>(order?.action || "buy");

  const priceChange = price !== (order?.price?.toString() ?? "");
  const amountChange = amount !== (order?.amount?.toString() ?? "");
  const actionChange = action !== order?.action;

  const orderChanged = priceChange || amountChange || actionChange;
  const editMode = !!order.id;
  const orderValue = Number(price) * Number(amount);

  const handleUpdateOrder = async () => {
    try {
      await updateOrder({
        ...order,
        amount: parseFloat(amount),
        price: parseFloat(price),
        action,
      });
      Toast.show({
        type: "success",
        text1: "Success",
        topOffset: 60,
        text2: "Updated order successfully",
      });

      goBack();
    } catch (error) {
      Alert.alert("Error", "Failed to update the order. Please try again.");
    }
  };

  const handleCreateOrder = async () => {
    await createOrder({
      instrumentId,
      amount: parseFloat(amount),
      price: parseFloat(price),
      action: "buy",
    });
    Toast.show({
      type: "success",
      text1: "Success",
      topOffset: 60,
      text2: "Created order successfully",
    });
    goBack();
  };

  const handleOrder = async () => {
    try {
      Alert.alert(
        `${editMode ? "Updating" : "Creating"} order`,
        `Please confirm you want to ${
          editMode ? "update" : "create"
        } this order.`,
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "OK",
            onPress: editMode ? handleUpdateOrder : handleCreateOrder,
          },
        ]
      );
    } catch (error) {
      Alert.alert(
        "Error",
        `Failed to ${
          updateOrderError ? "update" : "create"
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
    orderChanged,
    orderValue,
  };
};

export default useOrderForm;
