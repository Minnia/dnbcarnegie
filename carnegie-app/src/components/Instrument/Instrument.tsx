import { Text } from "react-native";
import useGetInstruments from "../../api/hooks/useGetInstruments";
import { Order } from "../../api/types";
import { findMatchingInstrument } from "../../utils/helpers.utils";

const Instrument = ({ order }: { order: Order }) => {
  const { data: instruments } = useGetInstruments();
  const match = findMatchingInstrument(order, instruments || []);
  return (
    <>
      <Text>{match?.name}</Text>
      <Text>{match?.ticker}</Text>
      <Text>{match?.id}</Text>
    </>
  );
};

export default Instrument;
