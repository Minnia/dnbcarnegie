import { ScrollView, Text } from "react-native";
import { Suspense } from "react";
import tokens from "../../constants/tokens";
import InstrumentCard from "../../components/InstrumentCard";
import { Spacer } from "../../components/common/styled";
import Order from "../../components/Order";
import { Screens } from "../screen.types";
import useOrderScreen from "./hooks/useOrderScreen";

const OrderScreen = () => {
  const { order, instrument, handleDelete, navigate } = useOrderScreen();

  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <ScrollView
        contentContainerStyle={{
          padding: tokens.BASELINE * 2,
        }}
      >
        <InstrumentCard instrument={instrument!} orderAction={order!.action} />
        <Spacer size={1} />
        <Order
          order={order!}
          onPress={() => navigate(Screens.ORDER_FORM, { order, instrument })}
          onDelete={handleDelete}
        />
      </ScrollView>
    </Suspense>
  );
};

export default OrderScreen;
