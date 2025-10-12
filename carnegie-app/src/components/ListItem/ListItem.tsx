import { Text, View, StyleSheet, Button } from "react-native";
import { Order } from "../../api/types";
import { useRoute } from "@react-navigation/native";
import useEditOrder from "../../api/hooks/useEditOrder";

const ListItem = ({ order }: { order: Order }) => {
  const params = useRoute();
  const { mutateAsync: editOrder } = useEditOrder(order.id);

  const isBuy = order.action === "buy";
  const total = order.amount * order.price;

  const editedOrder = {
    ...order,
    amount: order.amount + 10,
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.date}>
            {new Date(order.createdAt).toLocaleDateString("sv-SE", {
              day: "numeric",
              month: "short",
            })}
          </Text>
          <Text
            style={[
              styles.action,
              isBuy ? styles.buyAction : styles.sellAction,
            ]}
          >
            {order.action.toUpperCase()}
          </Text>
        </View>
        <View>
          <Text style={styles.instrumentName}>
            Instrument {order.instrumentId}
          </Text>
        </View>

        <View>
          <Text style={styles.amount}>{order.amount} st</Text>
        </View>

        <View>
          <Text style={styles.date}>
            <View
              style={{
                // TODO: fix width
                width: 190,
                alignItems: "flex-end",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Text style={styles.total}>
                {total.toLocaleString("sv-SE")} kr
              </Text>
              <Text style={styles.price}>{order.price} kr</Text>
            </View>
          </Text>
        </View>
      </View>
      {params.name === "Order" && (
        <Button title='Edit' onPress={() => editOrder(editedOrder)} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 350,
    borderBottomColor: "#e5e5e5",
  },

  instrumentName: {
    fontSize: 15,
    fontWeight: "400",
    color: "#1a1a1a",
  },
  action: {
    fontSize: 13,
    fontWeight: "500",
  },
  buyAction: {
    color: "#0f7b6c",
  },
  sellAction: {
    color: "#d32f2f",
  },

  amount: {
    fontSize: 14,
    color: "#4a4a4a",
  },
  price: {
    fontSize: 13,
    color: "#6a6a6a",
  },

  total: {
    fontSize: 15,
    fontWeight: "500",
    color: "#1a1a1a",
  },
  date: {
    fontSize: 10,
    color: "#8a8a8a",
    flexDirection: "column",
  },
});

export default ListItem;
