import { Text, View } from "react-native";
import useGetInstruments from "../../api/hooks/useGetInstruments";
import { Order as OrderType } from "../../api/types";
import { findMatchingInstrument } from "../../utils/helpers.utils";
import { useNavigation } from "@react-navigation/native";
import useGetOrders from "../../api/hooks/useGetOrders";
import { Suspense } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Container, Spacer, StyledText } from "../common/styled";
import { themes } from "../../core/themes";
import Order from "../Order/Order";
import tokens from "../../core/tokens";

const Instrument = ({
  order,
  handleDelete,
}: {
  order: OrderType;
  handleDelete: () => void;
}) => {
  const { data: instruments } = useGetInstruments();
  const instrument = findMatchingInstrument(order, instruments || []);
  const { data: orders } = useGetOrders();

  const cachedOrder = orders?.find((o) => o.id === order.id) || order;
  const { navigate } = useNavigation<any>();

  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <ScrollView
        contentContainerStyle={{
          padding: tokens.BASELINE * 2,
        }}
        style={{ flexGrow: 1 }}
      >
        <Container
          height={150}
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
            <Container
              flexDirection='row'
              justifyContent='center'
              backgroundColor={themes.light.colors.carnegieGreen}
              borderRadius={tokens.BASELINE}
              style={{
                borderWidth: 1,
                borderColor: themes.light.colors.white,
              }}
              width={150}
            >
              <StyledText
                fontWeight='bold'
                color={themes.light.colors.white}
                fontSize={tokens.FONT_SIZE.LARGE}
              >
                {order.action.toUpperCase()}
              </StyledText>
            </Container>
          </View>
        </Container>
        <Order
          order={cachedOrder}
          onPress={() =>
            navigate("Manage order", { order: cachedOrder, instrument })
          }
          onDelete={handleDelete}
        />
      </ScrollView>
    </Suspense>
  );
};

export default Instrument;
