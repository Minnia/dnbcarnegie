import { SectionList, Text, TouchableOpacity, View } from "react-native";
import ListItem from "../ListItem";
import { Suspense, useMemo } from "react";
import { Order } from "../../api/types";
import useGetOrders from "../../api/hooks/useGetOrders";
import Title from "../Title";
import { useNavigation } from "@react-navigation/native";
import tokens from "../../core/tokens";

const List = () => {
  const { data: orders, isLoading, error: fetchError } = useGetOrders();

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
                  backgroundColor: "#afc39cff",
                  borderRadius: tokens.BASELINE,
                  marginBottom: tokens.BASELINE,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <ListItem order={item} />
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
