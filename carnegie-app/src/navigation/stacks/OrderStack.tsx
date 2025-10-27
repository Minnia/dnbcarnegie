import { createStackNavigator } from "@react-navigation/stack";
import OrdersScreen from "../screens/OrdersScreen";
import OrderScreen from "../screens/OrderScreen";
import OrderFormScreen from "../OrderFormScreen";
import HeaderLeft from "../../components/common/ScreenHeaders/HeaderLeft";
import { Screens } from "../screen.types";

const { Navigator, Screen } = createStackNavigator();

export const OrderStack = () => {
  return (
    <Navigator>
      <Screen name={Screens.ORDERS_LIST} component={OrdersScreen} />
      <Screen name={Screens.ORDER_DETAILS} component={OrderScreen} />
      <Screen
        name={Screens.ORDER_FORM}
        component={OrderFormScreen}
        options={({ navigation }) => ({
          headerLeft: () => {
            return <HeaderLeft navigation={navigation} />;
          },
          presentation: "modal",
        })}
      />
    </Navigator>
  );
};
