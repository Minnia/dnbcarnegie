import { Suspense } from "react";
import { SectionList, Text, TouchableOpacity, View } from "react-native";
import tokens from "../../constants/tokens";
import Title from "../../components/Title";
import OrderItem from "../../components/OrderListItem";
import { Screens } from "../screen.types";
import { Spacer } from "../../components/common/styled";
import useOrdersScreen from "./hooks/useOrdersScreen";

const OrdersScreen = () => {
  const { navigate, sections } = useOrdersScreen();
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
