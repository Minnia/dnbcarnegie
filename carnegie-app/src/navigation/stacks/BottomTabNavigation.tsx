import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OrdersScreen from "../screens/OrdersScreen";
import OrderScreen from "../screens/OrderScreen";
import { OrderStack } from "./OrderStack";

export const BottomTabNavigation = () => {
  const { Navigator, Screen } = createBottomTabNavigator();
  return (
    <Navigator
      initialRouteName='Orders'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name='Orders'
        options={{ headerShown: false }}
        component={OrderStack}
      />
    </Navigator>
  );
};
