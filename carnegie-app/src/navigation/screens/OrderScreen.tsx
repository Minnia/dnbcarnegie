import { Alert, ScrollView, Text } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import useDeleteOrder from "../../api/hooks/orders/useDeleteOrder";
import { Suspense } from "react";
import tokens from "../../core/tokens";
import InstrumentCard from "../../components/InstrumentCard";
import { Spacer } from "../../components/common/styled";
import Order from "../../components/Order";
import useGetInstruments from "../../api/hooks/instruments/useGetInstruments";
import { findMatchingInstrument } from "../../utils/helpers.utils";
import useGetOrders from "../../api/hooks/orders/useGetOrders";
import {
  OrderManagementStackNavigationProp,
  OrderScreenNavigationProp,
  OrderScreenParamList,
} from "../navigation.types";
import { Screens } from "../screen.types";

const OrderScreen = () => {
  const {
    params: { order },
  } = useRoute<RouteProp<OrderScreenParamList>>();
  const { goBack } = useNavigation<OrderScreenNavigationProp>();
  const { mutateAsync: deleteOrder } = useDeleteOrder(order.id);

  const handleDelete = async () => {
    try {
      await deleteOrder();
      goBack();
    } catch (error) {
      Alert.alert("Error", "Failed to delete the order. Please try again.");
    }
  };

  const { data: instruments } = useGetInstruments();
  const instrument = findMatchingInstrument(order, instruments || []);
  const { data: orders } = useGetOrders();

  const cachedOrder = orders?.find((o) => o.id === order.id) || order;
  const { navigate } = useNavigation<OrderManagementStackNavigationProp>();
  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <ScrollView
        contentContainerStyle={{
          padding: tokens.BASELINE * 2,
        }}
      >
        <InstrumentCard instrument={instrument!} />
        <Spacer size={1} />
        <Order
          order={cachedOrder}
          onPress={() =>
            navigate(Screens.ORDER_FORM, { order: cachedOrder, instrument })
          }
          onDelete={handleDelete}
        />
      </ScrollView>
    </Suspense>
  );
};

export default OrderScreen;
