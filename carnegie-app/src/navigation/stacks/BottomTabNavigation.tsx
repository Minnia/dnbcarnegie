import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { OrderStack } from "./OrderStack";
import { OrderManagementStack } from "./OrderManagementStack";

export const BottomTabNavigation = () => {
  const { Navigator, Screen } = createBottomTabNavigator();
  return (
    <Navigator initialRouteName='Orders'>
      <Screen
        name='Orders'
        options={{ headerShown: false }}
        component={OrderStack}
      />
      <Screen name='Create order' component={OrderManagementStack} />
    </Navigator>
  );
};
