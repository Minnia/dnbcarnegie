import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OrderManagement = () => {
  return (
    <>
      {/* TODO: make this a common component */}
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Text>Order Management Screen</Text>
      </SafeAreaView>
    </>
  );
};

export default OrderManagement;
