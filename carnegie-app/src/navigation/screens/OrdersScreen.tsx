import { Suspense } from "react";
import { SectionList, Text, TouchableOpacity, View } from "react-native";
import tokens from "../../constants/tokens";
import Title from "../../components/Title";
import OrderItem from "../../components/OrderListItem";
import { Screens } from "../screen.types";
import { Spacer } from "../../components/common/styled";
import useOrdersScreen from "./hooks/useOrdersScreen";
import EmptyState from "../../components/common/EmptyState";

const OrdersScreen = () => {
  const { navigate, sections, isError, error } = useOrdersScreen();

  if (isError && error) {
    return (
      <EmptyState
        text='Error loading orders'
        subtitle={
          error instanceof Error ? error.message : "Failed to fetch orders"
        }
        iconName='alert-circle-outline'
      />
    );
  }

  if (sections.length === 0 && !isError) {
    return (
      <EmptyState
        text='No orders found'
        subtitle='Place your first order to see it here'
        iconName='logo-ionic'
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
                onPress={() =>
                  navigate(Screens.ORDER_DETAILS, { orderId: item.id })
                }
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
