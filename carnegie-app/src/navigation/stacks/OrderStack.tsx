import { createStackNavigator } from "@react-navigation/stack";
import OrdersScreen from "../screens/OrdersScreen";
import OrderScreen from "../screens/OrderScreen";
import OrderFormScreen from "../OrderFormScreen";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HeaderLeft from "../../components/common/ScreenHeaders/HeaderLeft";

const { Navigator, Screen } = createStackNavigator();

export const OrderStack = () => {
  return (
    <Navigator>
      <Screen name='Orders' component={OrdersScreen} />
      <Screen name='Order' component={OrderScreen} />
      <Screen
        name='OrderForm'
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
