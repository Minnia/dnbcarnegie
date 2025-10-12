import { createStackNavigator } from "@react-navigation/stack";
import OrdersScreen from "../screens/OrdersScreen";
import OrderScreen from "../screens/OrderScreen";

const { Navigator, Screen } = createStackNavigator();

export const OrderStack = () => {
  return (
    <Navigator>
      <Screen name='Orders' component={OrdersScreen} />
      <Screen name='Order' component={OrderScreen} />
    </Navigator>
  );
};
