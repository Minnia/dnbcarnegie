import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { OrderStack } from "./OrderStack";
import { InstrumentsStack } from "./InstrumentsStack";
import Ionicons from "@expo/vector-icons/Ionicons";
import { themes } from "../../constants/themes";
import { Screens } from "../screen.types";

export const BottomTabNavigation = () => {
  const { Navigator, Screen } = createBottomTabNavigator();
  return (
    <Navigator
      initialRouteName='Orders'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let iconName;
          if (route.name === Screens.ORDERS_LIST) {
            iconName = focused ? "list-circle" : "list-circle-outline";
          } else if (route.name === Screens.ORDER_FORM) {
            iconName = focused ? "card" : "card-outline";
          }
          return (
            <Ionicons
              name={iconName as keyof typeof Ionicons.glyphMap}
              size={size}
              color={themes.light.colors.carnegieGreen}
            />
          );
        },
        tabBarActiveTintColor: themes.light.colors.carnegieGreen,
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Screen
        name={Screens.ORDERS_LIST}
        options={{ headerShown: true }}
        component={OrderStack}
      />
      <Screen
        name={Screens.ORDER_FORM}
        options={{ headerShown: false }}
        component={InstrumentsStack}
      />
    </Navigator>
  );
};
