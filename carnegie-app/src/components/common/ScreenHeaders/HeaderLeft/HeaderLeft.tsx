import { StackNavigationProp } from "@react-navigation/stack";
import { Text, TouchableOpacity } from "react-native";
import tokens from "../../../../core/tokens";
import { StyledText } from "../../styled";

const HeaderLeft = ({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}) => {
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
