import { Suspense, useMemo } from "react";

import {
  Dimensions,
  SectionList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tokens from "../../core/tokens";
import Title from "../../components/Title";
import OrderItem from "../../components/OrderListItem";
import useGetOrders from "../../api/hooks/orders/useGetOrders";
import { useNavigation } from "@react-navigation/native";
import { Order } from "../../api/types";
import { OrderScreenNavigationProp } from "../navigation.types";
import { Screens } from "../screen.types";
import { Spacer } from "../../components/common/styled";

const OrdersScreen = () => {
  const { data: orders } = useGetOrders();
  const { navigate } = useNavigation<OrderScreenNavigationProp>();

  const sections = useMemo(() => {
    if (!orders) return [];

    const grouped = orders.reduce(
      (
        acc: { title: string; data: Order[]; sortDate: Date }[],
        order: Order
      ) => {
        const monthYear = new Date(order.updatedAt).toLocaleDateString(
          "en-US",
          {
            year: "numeric",
            month: "long",
          }
        );

        const existing = acc.find((section) => section.title === monthYear);
        if (existing) {
          existing.data.push(order);
        } else {
          acc.push({
            title: monthYear,
            data: [order],
            sortDate: new Date(order.updatedAt),
          });
        }
        return acc;
      },
      []
    );
    return grouped.sort(
      (
        a: { title: string; data: Order[]; sortDate: Date },
        b: { title: string; data: Order[]; sortDate: Date }
      ) => b.sortDate.getTime() - a.sortDate.getTime()
    );
  }, [orders]);
  return (
    <Suspense
      fallback={
        <View>
          <Text>Loading...</Text>
        </View>
      }
    >
      <SectionList
        stickySectionHeadersEnabled={false}
        style={{ margin: tokens.BASELINE }}
        sections={sections}
        showsVerticalScrollIndicator
        renderSectionHeader={({ section: { title } }) => (
          <View>
            <Title title={title} />
          </View>
        )}
        renderItem={({ item }) => {
          return (
            <>
              <TouchableOpacity
                onPress={() => navigate(Screens.ORDER_DETAILS, { order: item })}
              >
                <OrderItem order={item} />
              </TouchableOpacity>
              <Spacer size={8} />
            </>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </Suspense>
  );
};

export default OrdersScreen;
