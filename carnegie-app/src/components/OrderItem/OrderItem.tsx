import { View } from "react-native";
import { Order } from "../../api/types";
import { findMatchingInstrument } from "../../utils/helpers.utils";
import useGetInstruments from "../../api/hooks/useGetInstruments";
import * as S from "./styled";
import { themes } from "../../core/themes";
import { Container, StyledText } from "../common/styled";
import tokens from "../../core/tokens";

const OrderItem = ({ order }: { order: Order }) => {
  const { data: instruments, isLoading } = useGetInstruments();

  const match = findMatchingInstrument(order, instruments || []);

  const isBuy = order.action === "buy";
  const total = order.amount * order.price;

  return (
    <>
      <Container
        flexDirection='row'
        borderRadius={tokens.BASELINE}
        justifyContent='space-between'
        alignItems='center'
        width={"100%"}
        backgroundColor={themes.light.colors.white}
        paddingHorizontal={tokens.BASELINE * 2}
        paddingVertical={tokens.BASELINE * 1.5}
        style={{
          borderBottomWidth: 1,
          borderBottomColor: themes.light.colors.background,
          borderRadius: tokens.BASELINE,
          shadowColor: themes.light.colors.black,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <View>
          <StyledText fontSize={tokens.FONT_SIZE.XSMALL}>
            {new Date(order.updatedAt).toLocaleDateString("sv-SE", {
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
          <StyledText fontWeight='bold'>
            {total.toLocaleString("sv-SE")} kr
          </StyledText>
          <StyledText fontSize={tokens.FONT_SIZE.SMALL}>
            {order.price} kr
          </StyledText>
        </S.Section>
      </Container>
    </>
  );
};

export default OrderItem;
