import { Alert, Button, Text, TextInput, View } from "react-native";
import { Action, Instrument, Order } from "../api/types";
import useEditOrder from "../api/hooks/useEditOrder";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import useCreateOrder from "../api/hooks/useCreateOrder";

const OrderForm = ({
  order,
  instrument,
}: {
  order?: Order;
  instrument: Instrument;
}) => {
  const editMode = !!order;

  const { mutateAsync: updateOrder } = useEditOrder(order?.id || 0);
  const { mutateAsync: createOrder } = useCreateOrder();

  const [amount, setAmount] = useState<string>(order?.amount?.toString() || "");
  const [price, setPrice] = useState<string>(order?.price?.toString() || "");

  const { navigate, goBack } = useNavigation();

  const handleOrder = async () => {
    try {
      if (editMode) {
        await updateOrder({
          ...order,
          amount: parseFloat(amount),
          price: parseFloat(price),
        });
        goBack();
      } else {
        await createOrder({
          instrumentId: instrument.id,
          amount: parseFloat(amount),
          price: parseFloat(price),
          action: "buy",
        });
        goBack();
      }
    } catch (error) {
      console.error(
        `Failed to ${editMode ? "update" : "create"} order:`,
        error
      );
      Alert.alert(
        "Error",
        `Failed to ${
          editMode ? "update" : "create"
        } the order. Please try again.`
      );
    }
  };
  return (
    <View>
      <Text>{instrument?.name}</Text>
      <TextInput
        placeholder={order?.amount?.toString() ?? "Amount"}
        keyboardType='numeric'
        onChangeText={(text) => setAmount(text)}
        onBlur={() => setAmount(amount)}
      />
      <TextInput
        placeholder={order?.price?.toString() ?? "Price"}
        keyboardType='numeric'
        onChangeText={(text) => setPrice(text)}
        onBlur={() => setPrice(price)}
      />
      <Button
        title={editMode ? "Update order" : "Create order"}
        onPress={handleOrder}
      />
    </View>
  );
};

export default OrderForm;
