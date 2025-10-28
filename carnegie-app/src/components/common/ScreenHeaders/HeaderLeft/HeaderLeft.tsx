import { StackNavigationProp } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import tokens from "../../../../constants/tokens";
import { StyledText } from "../../styled";
import { ParamListBase } from "@react-navigation/native";

type HeaderLeftProps = {
  navigation: StackNavigationProp<ParamListBase>;
};

const HeaderLeft = ({ navigation }: HeaderLeftProps) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <StyledText
        fontSize={tokens.FONT_SIZE.LARGE}
        style={{
          marginLeft: tokens.BASELINE * 1.5,
        }}
      >
        Cancel
      </StyledText>
    </TouchableOpacity>
  );
};

export default HeaderLeft;
