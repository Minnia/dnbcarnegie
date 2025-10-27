import { Instrument, Order } from "../api/types";
import useOrderForm from "./useOrderForm";
import { StyledText, Container, Spacer } from "../components/common/styled";
import tokens from "../core/tokens";
import TextSwitch from "../components/common/Switch/Switch";
import Button from "../components/common/Button";
import { themes } from "../core/themes";
import Input from "../components/common/Input";
import { ScrollView } from "react-native-gesture-handler";
import StickyFooter from "../components/common/StickyFooter";
import OrderValue from "../components/TotalOrderSumCard/TotalOrderSumCard";
import InstrumentCard from "../components/InstrumentCard";
import { Dimensions, KeyboardAvoidingView, Platform } from "react-native";

const OrderForm = ({
  order,
  instrument,
}: {
  order?: Order;
  instrument: Instrument;
}) => {
  const {
    amount,
    setAmount,
    price,
    setPrice,
    handleOrder,
    editMode,
    action,
    setAction,
    orderChanged,
  } = useOrderForm(order || ({} as Order), instrument.id);

  const orderValue = Number(price) * Number(amount);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={
        Platform.OS === "ios" ? Dimensions.get("window").height * 0.15 : 0
      }
    >
      <ScrollView
        keyboardShouldPersistTaps='handled'
        contentContainerStyle={{
          padding: tokens.BASELINE * 2,
        }}
        style={{ flexGrow: 1 }}
      >
        <InstrumentCard instrument={instrument} />
        <Spacer size={16} />
        <Container
          backgroundColor={themes.light.colors.white}
          borderRadius={tokens.BASELINE}
          paddingVertical={tokens.BASELINE}
          shadowColor={themes.light.colors.black}
          shadowOffset={{ width: 0, height: 2 }}
          shadowOpacity={0.25}
          shadowRadius={3.84}
          elevation={5}
        >
          <StyledText
            style={{ paddingHorizontal: tokens.BASELINE * 2 }}
            fontWeight='bold'
          >
            Amount of unit
          </StyledText>

          <Input
            placeholder={order?.amount?.toString() ?? "Amount"}
            keyboardType='numeric'
            onChangeText={(text) => setAmount(text)}
            onBlur={() => setAmount(amount)}
            style={{
              margin: tokens.BASELINE,
              backgroundColor: themes.light.colors.white,
              shadowColor: themes.light.colors.black,

              borderWidth: 1,
              borderColor: themes.light.colors.carnegieGreen,
            }}
          />
          <Spacer size={16} />
          <StyledText paddingHorizontal={tokens.BASELINE * 2} fontWeight='bold'>
            Price of unit
          </StyledText>
          <Input
            placeholder={order?.price?.toString() ?? "Price"}
            keyboardType='numeric'
            onChangeText={(text) => setPrice(text)}
            onBlur={() => setPrice(price)}
            style={{
              margin: tokens.BASELINE,
              backgroundColor: themes.light.colors.white,
              shadowColor: themes.light.colors.black,

              borderWidth: 1,
              borderColor: themes.light.colors.carnegieGreen,
            }}
          />
          <StyledText
            paddingHorizontal={tokens.BASELINE * 2}
            fontSize={tokens.FONT_SIZE.XSMALL}
          >
            Price in SEK
          </StyledText>

          {editMode && (
            <>
              <TextSwitch
                value={action === "sell"}
                onValueChange={() =>
                  setAction(action === "buy" ? "sell" : "buy")
                }
                leftText='Buy'
                rightText='Sell'
              />
              <Spacer size={4} />
            </>
          )}
        </Container>
        <Spacer size={32} />
        <OrderValue orderValue={orderValue} />
        <Spacer size={32} />
        <StickyFooter>
          <Button
            disabled={editMode ? !orderChanged : !(amount && price)}
            fontWeight='bold'
            variant='success'
            title={editMode ? "Update order" : "Create order"}
            onPress={handleOrder}
            size='large'
          />
        </StickyFooter>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default OrderForm;
