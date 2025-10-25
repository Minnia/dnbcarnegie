import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { OrderStack } from "./OrderStack";
import { OrderManagementStack } from "./OrderManagementStack";
import Ionicons from "@expo/vector-icons/Ionicons";

export const BottomTabNavigation = () => {
  const { Navigator, Screen } = createBottomTabNavigator();
  return (
    <Navigator
      initialRouteName='Orders'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Orders") {
            iconName = focused ? "list-circle" : "list-circle-outline";
          } else if (route.name === "Create order") {
            iconName = focused ? "card" : "card-outline";
          }
          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
      })}
    >
      <Screen
        name='Orders'
        options={{ headerShown: false }}
        component={OrderStack}
      />
      <Screen
        name='Create order'
        options={{ headerShown: false }}
        component={OrderManagementStack}
      />
    </Navigator>
  );
};
