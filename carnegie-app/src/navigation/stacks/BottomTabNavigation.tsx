import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { OrderStack } from "./OrderStack";
import OrderManagement from "../screens/OrderManagement";

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
      <Screen
        name='OrderManagement'
        options={{ headerShown: false }}
        component={OrderManagement}
      />
    </Navigator>
  );
};
