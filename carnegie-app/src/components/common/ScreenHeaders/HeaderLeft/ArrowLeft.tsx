import { StackNavigationProp } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import tokens from "../../../../constants/tokens";
import { ParamListBase } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { themes } from "../../../../constants/themes";

type ArrowLeftProps = {
  navigation: StackNavigationProp<ParamListBase>;
};

const ArrowLeft = ({ navigation }: ArrowLeftProps) => {
  return (
    <TouchableOpacity
      style={{ paddingLeft: tokens.BASELINE }}
      onPress={() => navigation.goBack()}
    >
      <Ionicons
        name='arrow-back'
        size={tokens.ICON.DEFAULT}
        color={themes.light.colors.black}
      />
    </TouchableOpacity>
  );
};

export default ArrowLeft;
