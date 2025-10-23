import { Text, View } from "react-native";
import tokens from "../../core/tokens";
import { StyledText } from "../common/styled";

const OrderDetails = ({ label, value }: { label: string; value: string }) => {
  return (
    <View style={{ flex: 1 }}>
      <StyledText
        style={{
          fontSize: tokens.FONT_SIZE.SMALL,
          color: "#000000ff",
          marginBottom: tokens.BASELINE / 2,
          textAlign: "center",
        }}
      >
        {label}
      </StyledText>
      <StyledText fontWeight='bold' textAlign='center'>
        {value}
      </StyledText>
    </View>
  );
};

export default OrderDetails;
