import { Alert, Button, Text, View } from "react-native";
import useGetInstruments from "../../api/hooks/useGetInstruments";
import { Order } from "../../api/types";
import {
  findMatchingInstrument,
  formattedDate,
} from "../../utils/helpers.utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import useGetOrders from "../../api/hooks/useGetOrders";
import { Suspense } from "react";
import { ScrollView } from "react-native-gesture-handler";
import StickyFooter from "../common/StickyFooter";
import OrderDetails from "../OrderDetails";
import * as S from "./styled";
import { Card } from "../common/styled";
import { themes } from "../../core/themes";

const Instrument = ({
  order,
  handleDelete,
}: {
  order: Order;
  handleDelete: () => void;
}) => {
  const { data: instruments } = useGetInstruments();
  const instrument = findMatchingInstrument(order, instruments || []);
  const { data: orders } = useGetOrders();
  console.log("orders", orders);
  const cachedOrder = orders?.find((o) => o.id === order.id) || order;
  const { navigate } = useNavigation<any>();

  const handleAlert = () => {
    Alert.alert("Confirmation", "Are you sure you want to delete this order?", [
      { text: "Cancel", style: "cancel" },
      { text: "OK", onPress: () => handleDelete() },
    ]);
  };

  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <SafeAreaView style={{ padding: 16 }}>
        <ScrollView style={{}}>
          <Card
            backgroundColor={themes.light.colors.cardBackground}
            style={{
              padding: 16,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 8,
            }}
          >
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
          </Card>
          <View style={{ gap: 24, marginTop: 24 }}>
            <S.TextContainer>
              <OrderDetails
                label='Action'
                value={cachedOrder.action}
                color={cachedOrder.action === "buy" ? "#008000" : "#ff0000"}
              />
              <OrderDetails
                label='Amount'
                value={cachedOrder.amount.toString()}
              />
            </S.TextContainer>

            <S.TextContainer>
              <OrderDetails
                label='Price per unit'
                value={`${cachedOrder.price} kr`}
              />

              <OrderDetails
                label='Total'
                value={(cachedOrder.price * cachedOrder.amount).toFixed(2)}
              />
            </S.TextContainer>

            <S.TextContainer>
              <OrderDetails
                label='Created'
                value={formattedDate(new Date(cachedOrder.createdAt))}
              />
              <OrderDetails
                label='Updated at'
                value={formattedDate(new Date(cachedOrder.updatedAt))}
              />
            </S.TextContainer>

            <StickyFooter>
              <Button
                title='Edit Order'
                onPress={() =>
                  navigate("Manage order", { order: cachedOrder, instrument })
                }
              />
              <Button
                title='Delete Order'
                onPress={handleAlert}
                color={themes.light.colors.error}
              />
            </StickyFooter>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Suspense>
  );
};

export default Instrument;
