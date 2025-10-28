import { Alert, View } from "react-native";
import { formattedDate } from "../../utils/helpers.utils";
import StickyFooter from "../common/StickyFooter";
import Button from "../common/Button";
import { themes } from "../../constants/themes";
import tokens from "../../constants/tokens";
import { Container, Spacer, StyledText } from "../common/styled";
import OrderValue from "../TotalOrderSumCard/TotalOrderSumCard";
import { Order as OrderType } from "../../api/types";

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

  const orderValue = order.price * order.amount;

  return (
    <View style={{ gap: tokens.BASELINE * 3, marginTop: tokens.BASELINE * 3 }}>
      <OrderValue orderValue={orderValue} />
      <Container
        flexDirection='row'
        alignItems='center'
        borderRadius={tokens.BASELINE}
        paddingVertical={tokens.BASELINE * 2}
        paddingHorizontal={tokens.BASELINE * 2}
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
        {/* TODO: fix so that it's actually 50% width on both, with flex */}
        <Container width={"50%"}>
          <StyledText>Price per unit</StyledText>
          <StyledText textAlign='left' fontWeight='bold'>
            {order.price} kr
          </StyledText>
        </Container>
        <Container width={"50%"}>
          <StyledText>Total</StyledText>
          <StyledText fontWeight='bold'>{orderValue.toFixed(2)} kr</StyledText>
        </Container>
      </Container>
      <Container
        borderRadius={tokens.BASELINE}
        flexDirection='row'
        justifyContent='center'
        alignItems='center'
        paddingVertical={tokens.BASELINE * 2}
        paddingHorizontal={tokens.BASELINE * 2}
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
        <Container width={"50%"}>
          <StyledText>Created</StyledText>
          <StyledText fontWeight='bold'>
            {formattedDate(new Date(order.createdAt))}
          </StyledText>
        </Container>
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
