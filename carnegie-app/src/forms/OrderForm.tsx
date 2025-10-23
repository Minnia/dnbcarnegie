import { TextInput, View } from "react-native";
import { Instrument, Order } from "../api/types";
import { SafeAreaView } from "react-native-safe-area-context";
import useOrderForm from "./useOrderForm";

import {
  Card,
  StyledText,
  Container,
  Spacer,
} from "../components/common/styled";
import tokens from "../core/tokens";
import TextSwitch from "../components/common/Switch/Switch";
import Button from "../components/common/Button";

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

  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: tokens.BASELINE * 2,
        justifyContent: "center",
      }}
    >
      <View>
        <StyledText fontSize={20} fontWeight='bold'>
          {instrument?.name}
        </StyledText>
        <Spacer size={16} />
        <StyledText fontSize={tokens.FONT_SIZE.DEFAULT} fontWeight='bold'>
          Amount of unit
        </StyledText>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: tokens.BASELINE,
            height: 40,
            paddingHorizontal: tokens.BASELINE,
          }}
          placeholder={order?.amount?.toString() ?? "Amount"}
          keyboardType='numeric'
          onChangeText={(text) => setAmount(text)}
          onBlur={() => setAmount(amount)}
        />
        <Spacer size={16} />
        <StyledText fontSize={tokens.FONT_SIZE.DEFAULT} fontWeight='bold'>
          Price of unit
        </StyledText>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: tokens.BASELINE,
            height: 40,
            paddingHorizontal: tokens.BASELINE,
          }}
          placeholder={order?.price?.toString() ?? "Price"}
          keyboardType='numeric'
          onChangeText={(text) => setPrice(text)}
          onBlur={() => setPrice(price)}
        />
        <Spacer size={4} />
        <StyledText fontSize={10}>Price in SEK</StyledText>
        <Spacer size={32} />
        {editMode && (
          <>
            <Container
              alignItems='center'
              flexDirection='row'
              justifyContent='center'
            >
              <TextSwitch
                value={action === "buy"}
                onValueChange={() =>
                  setAction(action === "buy" ? "sell" : "buy")
                }
                leftText='Buy'
                rightText='Sell'
              />
            </Container>
            <Spacer size={32} />
          </>
        )}
        <Card backgroundColor='#afc39cff' style={{ padding: 16 }}>
          <StyledText fontSize={tokens.FONT_SIZE.DEFAULT} fontWeight='bold'>
            Total order value
          </StyledText>
          <StyledText>{Number(price) * Number(amount)} kr</StyledText>
        </Card>
        <Spacer size={32} />
        <Container
          flexDirection='row'
          justifyContent='center'
          alignItems='center'
          height={50}
        >
          <Button
            variant='secondary'
            title={editMode ? "Update order" : "Create order"}
            onPress={handleOrder}
          />
        </Container>
      </View>
    </SafeAreaView>
  );
};

export default OrderForm;
