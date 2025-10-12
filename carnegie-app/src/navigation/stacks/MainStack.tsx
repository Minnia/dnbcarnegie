import { createStackNavigator } from "@react-navigation/stack";
import OrdersScreen from "../screens/OrdersScreen";
import { BottomTabNavigation } from "./BottomTabNavigation";

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name='BottomTab'
        component={BottomTabNavigation}
      />
    </Stack.Navigator>
  );
};
