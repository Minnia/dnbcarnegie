import { Alert, Button, Text, TextInput, View } from "react-native";
import { Action, Instrument, Order } from "../api/types";
import useEditOrder from "../api/hooks/useEditOrder";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const OrderForm = ({
  order,
  instrument,
  orderAction,
}: {
  order: Order;
  instrument: Instrument;
  orderAction: Action;
}) => {
  const { mutateAsync: updateOrder } = useEditOrder(order.id);

  const [amount, setAmount] = useState<string>(order.amount.toString());
  const [price, setPrice] = useState<string>(order.price.toString());

  const { goBack } = useNavigation<any>();

  const handleUpdateOrder = async () => {
    try {
      await updateOrder({
        ...order,
        amount: parseFloat(amount),
        price: parseFloat(price),
      });
      goBack();
    } catch (error) {
      console.error("Failed to update order:", error);
      Alert.alert("Error", "Failed to update the order. Please try again.");
    }
  };
  return (
    <View>
      <Text>{instrument.name}</Text>
      <TextInput
        placeholder={order.amount.toString()}
        keyboardType='numeric'
        onChangeText={(text) => setAmount(text)}
        onBlur={() => setAmount(amount)}
      />
      <TextInput
        placeholder={order.price.toString()}
        keyboardType='numeric'
        onChangeText={(text) => setPrice(text)}
        onBlur={() => setPrice(price)}
      />
      <Button title='Update order' onPress={handleUpdateOrder} />
    </View>
  );
};

export default OrderForm;
