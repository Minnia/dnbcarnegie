import { createStackNavigator } from "@react-navigation/stack";
import OrdersScreen from "../screens/OrdersScreen";
import OrderScreen from "../screens/OrderScreen";
import OrderFormScreen from "../OrderFormScreen";

const { Navigator, Screen } = createStackNavigator();

export const OrderStack = () => {
  return (
    <Navigator>
      <Screen name='Orders' component={OrdersScreen} />
      <Screen name='Order' component={OrderScreen} />
      <Screen
        name='OrderForm'
        component={OrderFormScreen}
        options={{
          presentation: "modal",
        }}
      />
    </Navigator>
  );
};
