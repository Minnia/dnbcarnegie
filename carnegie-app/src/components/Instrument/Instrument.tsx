import { Alert, Button, Text, View } from "react-native";
import useGetInstruments from "../../api/hooks/useGetInstruments";
import { Order } from "../../api/types";
import { findMatchingInstrument } from "../../utils/helpers.utils";
import { SafeAreaView } from "react-native-safe-area-context";
import useDeleteOrder from "../../api/hooks/useDeleteOrder";
import { useNavigation } from "@react-navigation/native";
import useGetOrders from "../../api/hooks/useGetOrders";
import { Suspense } from "react";

const Instrument = ({ order }: { order: Order }) => {
  const { data: instruments } = useGetInstruments();
  const instrument = findMatchingInstrument(order, instruments || []);
  const { mutateAsync: deleteOrder } = useDeleteOrder(order.id);
  const { data: orders } = useGetOrders();

  const cachedOrder = orders?.find((o) => o.id === order.id) || order;

  const { navigate, goBack } = useNavigation<any>();

  const handleDelete = async () => {
    try {
      await deleteOrder();
      goBack();
    } catch (error) {
      Alert.alert("Error", "Failed to delete the order. Please try again.");
    }
  };

  const handleAlert = () => {
    Alert.alert("Confirmation", "Are you sure you want to delete this order?", [
      { text: "Cancel", style: "cancel" },
      { text: "OK", onPress: () => handleDelete() },
    ]);
  };

  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <SafeAreaView style={{ flex: 1, padding: 16, top: 50 }}>
        <View style={{ padding: 16, borderRadius: 8, borderWidth: 1 }}>
          <View>
            <Text
              style={{ fontWeight: "500", textAlign: "center", fontSize: 16 }}
            >
              {instrument?.name}
            </Text>
            <Text style={{ textAlign: "center", fontSize: 14 }}>
              {instrument?.ticker}
            </Text>
          </View>
          <Text
            style={{
              borderBottomColor: "black",
              paddingTop: 8,
              paddingBottom: 2,
              borderBottomWidth: 1,
            }}
          >
            Action: {cachedOrder.action}
          </Text>

          <Text
            style={{
              borderBottomColor: "black",
              paddingTop: 8,
              paddingBottom: 2,
              borderBottomWidth: 1,
            }}
          >
            Price: {cachedOrder.price} SEK
          </Text>
          <Text
            style={{
              borderBottomColor: "black",
              paddingTop: 8,
              paddingBottom: 2,
              borderBottomWidth: 1,
            }}
          >
            Amount: {cachedOrder.amount} st
          </Text>
          <Text
            style={{
              borderBottomColor: "black",
              paddingTop: 8,
              paddingBottom: 2,
              borderBottomWidth: 1,
            }}
          >
            Total: {(cachedOrder.price * cachedOrder.amount).toFixed(2)} SEK
          </Text>
          <Text
            style={{
              borderBottomColor: "black",
              paddingBottom: 4,
              borderBottomWidth: 1,
            }}
          >
            Created:
            {new Date(cachedOrder.createdAt).toLocaleString("sv-SE", {
              day: "numeric",
              month: "short",
            })}
          </Text>
          <Text
            style={{
              borderBottomColor: "black",
              paddingBottom: 4,
              borderBottomWidth: 1,
            }}
          >
            Updated:
            {new Date(cachedOrder.updatedAt).toLocaleString("sv-SE", {
              day: "numeric",
              month: "short",
            })}
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            paddingTop: 20,
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Button
            title='Edit Order'
            onPress={() =>
              navigate("OrderForm", { order: cachedOrder, instrument })
            }
          />
          <Button title='Delete' onPress={handleAlert} />
        </View>
      </SafeAreaView>
    </Suspense>
  );
};

export default Instrument;
