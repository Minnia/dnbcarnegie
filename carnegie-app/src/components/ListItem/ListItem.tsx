import { Text, View } from "react-native";
import { Order } from "../../api/types";
import { findMatchingInstrument } from "../../utils/helpers.utils";
import useGetInstruments from "../../api/hooks/useGetInstruments";
import * as S from "./styled";
import { themes } from "../../core/themes";

const ListItem = ({ order }: { order: Order }) => {
  const { data: instruments, isLoading } = useGetInstruments();

  const match = findMatchingInstrument(order, instruments || []);

  const isBuy = order.action === "buy";
  const total = order.amount * order.price;

  return (
    <>
      <S.Container>
        <View>
          <Text
            style={{
              fontSize: 10,
              color: themes.light.colors.text,
            }}
          >
            {new Date(order.updatedAt).toLocaleDateString("sv-SE", {
              day: "numeric",
              month: "short",
            })}
          </Text>
          <Text
            style={{
              color: isBuy
                ? themes.light.colors.success
                : themes.light.colors.error,
            }}
          >
            {order.action.toUpperCase()}
          </Text>
        </View>
        <S.Section position='left' gap={4}>
          <S.InstrumentName>
            {isLoading ? "Loading..." : match?.name}
          </S.InstrumentName>
          <Text
            style={{
              fontSize: 14,
              color: themes.light.colors.text,
            }}
          >
            {order.amount} st
          </Text>
        </S.Section>
        <S.Section position='right' gap={2}>
          <Text
            style={{
              fontSize: 15,
              color: themes.light.colors.text,
              fontWeight: "500",
            }}
          >
            {total.toLocaleString("sv-SE")} kr
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: themes.light.colors.text,
            }}
          >
            {order.price} kr
          </Text>
        </S.Section>
      </S.Container>
    </>
  );
};

export default ListItem;
