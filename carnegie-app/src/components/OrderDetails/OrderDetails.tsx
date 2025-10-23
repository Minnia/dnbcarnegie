import { View } from "react-native";
import tokens from "../../core/tokens";
import { StyledText } from "../common/styled";
import { themes } from "../../core/themes";

const OrderDetails = ({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color?: string;
}) => {
  return (
    <View style={{ flex: 1 }}>
      <StyledText
        style={{
          fontSize: tokens.FONT_SIZE.SMALL,
          color: themes.light.colors.text,
          marginBottom: tokens.BASELINE / 2,
          textAlign: "center",
        }}
      >
        {label}
      </StyledText>
      <StyledText color={color} fontWeight='bold' textAlign='center'>
        {value}
      </StyledText>
    </View>
  );
};

export default OrderDetails;
