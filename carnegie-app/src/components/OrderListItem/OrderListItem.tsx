import { View } from "react-native";
import { findMatchingInstrument } from "../../utils/helpers.utils";
import useGetInstruments from "../../api/hooks/instruments/useGetInstruments";
import * as S from "./styled";
import { themes } from "../../constants/themes";
import { Container, StyledText } from "../common/styled";
import tokens from "../../constants/tokens";
import { Order } from "../../api/types";

const OrderListItem = ({ order }: { order: Order }) => {
  const { data: instruments, isLoading } = useGetInstruments();

  const match = findMatchingInstrument(order, instruments || []);

  const isBuy = order.action === "buy";
  const total = order.amount * order.price;

  return (
    <>
      <Container
        flexDirection='row'
        borderRadius={tokens.BASELINE}
        alignItems='center'
        backgroundColor={themes.light.colors.white}
        paddingHorizontal={tokens.BASELINE * 2}
        paddingVertical={tokens.BASELINE * 1.5}
        shadowColor={themes.light.colors.black}
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity={0.25}
        width={"100%"}
        shadowRadius={3.84}
        elevation={5}
      >
        <View>
          <StyledText fontSize={tokens.FONT_SIZE.XSMALL}>
            {new Date(order.updatedAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
            })}
          </StyledText>
          <StyledText
            color={
              isBuy ? themes.light.colors.success : themes.light.colors.error
            }
            fontWeight='bold'
          >
            {order.action.toUpperCase()}
          </StyledText>
        </View>
        <S.Section position='left' gap={4}>
          <S.InstrumentName>
            {isLoading ? "Loading..." : match?.name}
          </S.InstrumentName>
          <StyledText color={themes.light.colors.text}>
            {order.amount} stocks
          </StyledText>
        </S.Section>
        <S.Section position='right' gap={2}>
          <StyledText fontWeight='bold'>{total} kr</StyledText>
          <StyledText fontSize={tokens.FONT_SIZE.SMALL}>
            {order.price} kr
          </StyledText>
        </S.Section>
      </Container>
    </>
  );
};

export default OrderListItem;
