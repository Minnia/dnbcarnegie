import { Text, View, Button } from "react-native";
import { Order } from "../../api/types";
import { useRoute } from "@react-navigation/native";
import useEditOrder from "../../api/hooks/useEditOrder";
import { findMatchingInstrument } from "../../utils/helpers.utils";
import useGetInstruments from "../../api/hooks/useGetInstruments";
import * as S from "./styled";
import { themes } from "../../core/themes";

const ListItem = ({ order }: { order: Order }) => {
  const params = useRoute();
  const { mutateAsync: editOrder } = useEditOrder(order.id);
  const { data: instruments } = useGetInstruments();

  const match = findMatchingInstrument(order, instruments || []);

  const isBuy = order.action === "buy";
  const total = order.amount * order.price;

  const editedOrder = {
    ...order,
    amount: order.amount + 10,
  };

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
            {new Date(order.createdAt).toLocaleDateString("sv-SE", {
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
          <S.InstrumentName>{match?.name}</S.InstrumentName>
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
      {params.name === "Order" && (
        <Button title='Edit' onPress={() => editOrder(editedOrder)} />
      )}
    </>
  );
};

export default ListItem;
