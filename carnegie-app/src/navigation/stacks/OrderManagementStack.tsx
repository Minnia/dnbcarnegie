import { createStackNavigator } from "@react-navigation/stack";
import OrdersScreen from "../screens/OrdersScreen";
import OrderScreen from "../screens/OrderScreen";
import OrderFormScreen from "../OrderFormScreen";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HeaderLeft from "../../components/common/ScreenHeaders/HeaderLeft";
import OrderManagement from "../screens/OrderManagement";

const { Navigator, Screen } = createStackNavigator();

export const OrderManagementStack = () => {
  return (
    <Navigator>
      <Screen
        name='Order management'
        options={{ headerShown: false }}
        component={OrderManagement}
      />
      <Screen
        name='OrderFormScreen'
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
