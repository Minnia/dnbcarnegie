import { Button, Text, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Order } from "../../api/types";
import Instrument from "../../components/Instrument";
import { SafeAreaView } from "react-native-safe-area-context";

type OrderScreenParamList = {
  OrderScreen: {
    order: Order;
  };
};

const OrderScreen = () => {
  const {
    params: { order },
  } = useRoute<RouteProp<OrderScreenParamList, "OrderScreen">>();
  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <View style={{ backgroundColor: "red", padding: 16, borderRadius: 8 }}>
        <Instrument order={order} />
        <Text style={{ color: "white" }}>Action: {order.action}</Text>

        <Text style={{ color: "white" }}>Price: {order.price} SEK</Text>
        <Text style={{ color: "white" }}>Amount: {order.amount} st</Text>
        <Text style={{ color: "white" }}>
          Total: {(order.price * order.amount).toFixed(2)} SEK
        </Text>
        <Text style={{ color: "white" }}>
          Created:{" "}
          {new Date(order.createdAt).toLocaleString("sv-SE", {
            day: "numeric",
            month: "short",
          })}
        </Text>
        <Text style={{ color: "white" }}>
          Updated:{" "}
          {new Date(order.updatedAt).toLocaleString("sv-SE", {
            day: "numeric",
            month: "short",
          })}
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          gap: 16,
        }}
      >
        <Button title='Edit Order' onPress={() => {}} />
        <Button title='Delete Order' onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default OrderScreen;
