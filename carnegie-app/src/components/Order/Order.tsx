import { Alert, View } from "react-native";
import { Order as OrderType } from "../../api/types";
import { formattedDate } from "../../utils/helpers.utils";
import StickyFooter from "../common/StickyFooter";
import Button from "../common/Button";
import { themes } from "../../core/themes";
import tokens from "../../core/tokens";
import { Container, Spacer, StyledText } from "../common/styled";

const Order = ({
  order,
  onPress,
  onDelete,
}: {
  order: OrderType;
  onPress: () => void;
  onDelete: () => void;
}) => {
  const handleAlert = () => {
    Alert.alert("Confirmation", "Are you sure you want to delete this order?", [
      { text: "Cancel", style: "cancel" },
      { text: "OK", onPress: () => onDelete() },
    ]);
  };

  return (
    <View style={{ gap: 24, marginTop: tokens.BASELINE * 3 }}>
      <Container
        height={150}
        justifyContent='center'
        alignItems='center'
        backgroundColor={themes.light.colors.white}
        borderRadius={tokens.BASELINE}
        shadowColor={themes.light.colors.black}
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity={0.25}
        shadowRadius={3.84}
        elevation={5}
      >
        <StyledText fontSize={tokens.FONT_SIZE.LARGE}>
          Total order value
        </StyledText>
        <Spacer size={tokens.BASELINE} />
        <StyledText
          color={themes.light.colors.carnegieGreen}
          fontSize={tokens.FONT_SIZE.XLARGE}
          fontWeight='bold'
        >
          {(order.price * order.amount).toFixed(2)} kr
        </StyledText>
      </Container>
      <Container
        flexDirection='row'
        alignItems='center'
        borderRadius={tokens.BASELINE}
        paddingVertical={tokens.BASELINE * 2}
        backgroundColor={themes.light.colors.white}
        shadowColor={themes.light.colors.black}
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity={0.25}
        shadowRadius={3.84}
        elevation={5}
        style={{
          gap: tokens.BASELINE * 2,
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <StyledText>Price per unit</StyledText>
          <StyledText fontWeight='bold'>{order.price} kr</StyledText>
        </View>
        <View style={{ flex: 1 }}>
          <StyledText>Total</StyledText>
          <StyledText fontWeight='bold'>
            {(order.price * order.amount).toFixed(2)} kr
          </StyledText>
        </View>
      </Container>
      <Container
        borderRadius={tokens.BASELINE}
        flexDirection='row'
        justifyContent='center'
        alignItems='center'
        paddingVertical={tokens.BASELINE * 2}
        backgroundColor={themes.light.colors.white}
        shadowColor={themes.light.colors.black}
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity={0.25}
        shadowRadius={3.84}
        elevation={5}
        style={{
          gap: tokens.BASELINE * 2,
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <StyledText>Created</StyledText>
          <StyledText fontWeight='bold'>
            {formattedDate(new Date(order.createdAt))}
          </StyledText>
        </View>
        <View style={{ flex: 1 }}>
          <StyledText>Updated at</StyledText>
          <StyledText fontWeight='bold'>
            {formattedDate(new Date(order.updatedAt))}
          </StyledText>
        </View>
      </Container>
      <StickyFooter>
        <Button
          fontWeight='bold'
          variant='primary'
          title='Edit Order'
          onPress={onPress}
        />
        <Spacer size={tokens.BASELINE * 2} />
        <Button
          fontWeight='bold'
          variant='error'
          title='Delete Order'
          onPress={handleAlert}
        />
      </StickyFooter>
    </View>
  );
};

export default Order;
