import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useCreateOrder from "../../api/hooks/useCreateOrder";

const OrderManagement = () => {
  const {
    mutateAsync: createOrder,
    error,
    isPending,
    isSuccess,
  } = useCreateOrder();
  return (
    <>
      {/* TODO: make this a common component */}
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Button
          title='Add'
          onPress={() =>
            createOrder({
              instrumentId: 1,
              amount: 100,
              price: 20,
              action: "buy",
            })
          }
        />
      </SafeAreaView>
    </>
  );
};

export default OrderManagement;
