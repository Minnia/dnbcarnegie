import { SectionList, Text, TouchableOpacity, View } from "react-native";
import OrderItem from "../OrderItem";
import { Suspense, useMemo } from "react";
import { Order } from "../../api/types";
import useGetOrders from "../../api/hooks/useGetOrders";
import Title from "../Title";
import { useNavigation } from "@react-navigation/native";
import tokens from "../../core/tokens";
import EmptyState from "../common/EmptyState";

const List = () => {
  const { data: orders } = useGetOrders();

  const { navigate } = useNavigation<any>();

  const sections = useMemo(() => {
    if (!orders) return [];

    const grouped = orders.reduce(
      (
        acc: { title: string; data: Order[]; sortDate: Date }[],
        order: Order
      ) => {
        const monthYear = new Date(order.updatedAt).toLocaleDateString(
          "sv-SE",
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

  if (!orders || orders.length === 0) {
    return (
      <EmptyState
        text='No orders found'
        subtitle='Try creating a new order'
        iconName='document-outline'
        cta={() => navigate("Create order")}
        ctaTitle='Create order'
      />
    );
  }

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
                onPress={() => navigate("Order", { order: item })}
                style={{
                  marginBottom: tokens.BASELINE,
                }}
              >
                <OrderItem order={item} />
              </TouchableOpacity>
            </>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </Suspense>
  );
};

export default List;
