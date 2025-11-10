import { Dimensions, View } from "react-native";
import { themes } from "../../constants/themes";
import tokens from "../../constants/tokens";
import { Container, StyledText } from "../common/styled";
import { Instrument, Order } from "../../api/types";

const InstrumentCard = ({
  instrument,
  orderAction,
}: {
  instrument: Instrument;
  orderAction?: Order["action"];
}) => {
  const backgroundColor =
    orderAction === "buy"
      ? themes.light.colors.buyGreen
      : themes.light.colors.sellRed;
  return (
    <Container
      height={Dimensions.get("window").height * 0.1}
      backgroundColor={backgroundColor}
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
        {orderAction && (
          <StyledText
            paddingHorizontal={tokens.BASELINE}
            style={{
              backgroundColor:
                orderAction === "buy"
                  ? themes.light.colors.carnegieGreen
                  : themes.light.colors.carnegieRed,
              paddingVertical: tokens.BASELINE / 2,
              borderRadius: tokens.BASELINE / 2,
              alignSelf: "center",
              marginTop: tokens.BASELINE / 2,
            }}
            textAlign='center'
            fontWeight='bold'
            color={themes.light.colors.white}
          >
            {orderAction.toUpperCase()}
          </StyledText>
        )}
      </View>
    </Container>
  );
};

export default InstrumentCard;
