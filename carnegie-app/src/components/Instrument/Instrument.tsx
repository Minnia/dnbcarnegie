import { Text, View } from "react-native";
import useGetInstruments from "../../api/hooks/useGetInstruments";
import { Order } from "../../api/types";
import { findMatchingInstrument } from "../../utils/helpers.utils";

const Instrument = ({ order }: { order: Order }) => {
  const { data: instruments } = useGetInstruments();
  const match = findMatchingInstrument(order, instruments || []);
  return (
    <View>
      <Text style={{ fontWeight: "500", textAlign: "center", fontSize: 16 }}>
        {match?.name}
      </Text>
      <Text style={{ textAlign: "center", fontSize: 14 }}>{match?.ticker}</Text>
    </View>
  );
};

export default Instrument;
