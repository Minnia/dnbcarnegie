import { View } from "react-native";
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
  } = useOrderForm(order || ({} as Order), instrument.id);

  const orderValue = Number(price) * Number(amount);

  return (
    <ScrollView
      contentContainerStyle={{
        padding: tokens.BASELINE * 2,
      }}
      style={{ flexGrow: 1 }}
    >
      <Container
        height={100}
        backgroundColor={themes.light.colors.buyGreen}
        paddingHorizontal={tokens.BASELINE * 2}
        paddingVertical={tokens.BASELINE * 2}
        justifyContent='center'
        alignItems='center'
        borderRadius={tokens.BASELINE}
        shadowColor={themes.light.colors.black}
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity={0.25}
        shadowRadius={3.84}
        elevation={5}
      >
        <View>
          <StyledText fontWeight='bold' textAlign='center'>
            {instrument?.name}
          </StyledText>
          <StyledText textAlign='center'>{instrument?.ticker}</StyledText>
          <Spacer size={tokens.BASELINE} />
        </View>
      </Container>
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
          onChangeSearch={(text) => setAmount(text)}
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
          onChangeSearch={(text) => setPrice(text)}
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
            <Container
              backgroundColor='transparent'
              alignItems='center'
              flexDirection='row'
              justifyContent='center'
            >
              <TextSwitch
                value={action === "sell"}
                onValueChange={() =>
                  setAction(action === "buy" ? "sell" : "buy")
                }
                leftText='Buy'
                rightText='Sell'
              />
            </Container>
            <Spacer size={4} />
          </>
        )}
      </Container>
      <Spacer size={32} />
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
        <StyledText>Total order value</StyledText>
        <StyledText
          fontSize={tokens.FONT_SIZE.XLARGE}
          fontWeight='bold'
          color={themes.light.colors.carnegieGreen}
        >
          {orderValue} kr
        </StyledText>
      </Container>
      <Spacer size={32} />
      <StickyFooter>
        <Button
          disabled={!amount && !price}
          fontWeight='bold'
          variant='success'
          title={editMode ? "Update order" : "Create order"}
          onPress={handleOrder}
          size='large'
        />
      </StickyFooter>
    </ScrollView>
  );
};

export default OrderForm;
