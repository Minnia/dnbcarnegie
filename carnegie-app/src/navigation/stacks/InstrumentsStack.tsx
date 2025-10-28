import { createStackNavigator } from "@react-navigation/stack";
import OrderFormScreen from "../OrderFormScreen";
import HeaderLeft from "../../components/common/ScreenHeaders/HeaderLeft";
import InstrumentsScreen from "../screens/InstrumentsScreen";
import { Screens } from "../screen.types";

const { Navigator, Screen } = createStackNavigator();

export const InstrumentsStack = () => {
  return (
    <Navigator>
      <Screen
        name={Screens.INSTRUMENTS}
        options={{ headerShown: true }}
        component={InstrumentsScreen}
      />
      <Screen
        name={Screens.ORDER_FORM}
        component={OrderFormScreen}
        options={({ navigation }) => ({
          headerLeft: () => {
            return <HeaderLeft navigation={navigation} />;
          },
          headerTitle: Screens.ORDER_FORM,
          presentation: "modal",
        })}
      />
    </Navigator>
  );
};
