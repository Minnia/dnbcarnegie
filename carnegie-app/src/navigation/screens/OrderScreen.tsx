import ListItem from "../../components/ListItem";
import { useRoute } from "@react-navigation/native";

const OrderScreen = () => {
  const {
    params: { order },
  } = useRoute<any>();
  return <ListItem order={order} />;
};

export default OrderScreen;
