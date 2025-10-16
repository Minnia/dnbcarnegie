import { Button, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useCreateOrder from "../../api/hooks/useCreateOrder";
import { FlatList, TextInput } from "react-native-gesture-handler";
import useGetInstruments from "../../api/hooks/useGetInstruments";
import { useState } from "react";
import { fuzzySearch } from "../../utils/helpers.utils";
import { useNavigation } from "@react-navigation/native";

const OrderManagement = () => {
  const {
    mutateAsync: createOrder,
    error,
    isPending,
    isSuccess,
  } = useCreateOrder();
  const { data: instruments } = useGetInstruments();
  const { navigate } = useNavigation<any>();

  const [searchParam, setSearchParam] = useState("");

  const onChangeSearch = (search: string) => {
    setSearchParam(search);
  };

  return (
    <>
      {/* TODO: make this a common component */}
      <View
        style={{
          padding: 16,
          margin: 16,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          borderWidth: 1,
        }}
      >
        <TextInput
          onChangeText={(text) => onChangeSearch(text)}
          placeholder='Instrument name'
        />
      </View>
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        {!searchParam && <Text>Search for instruments</Text>}
        {searchParam &&
          instruments &&
          fuzzySearch(searchParam, instruments).length === 0 && (
            <Text>No matching instruments found</Text>
          )}
        {searchParam && instruments && (
          <>
            <FlatList
              data={fuzzySearch(searchParam, instruments)}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    navigate("OrderFormScreen", { instrument: item });
                  }}
                >
                  <Text>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </>
        )}
      </SafeAreaView>
    </>
  );
};

export default OrderManagement;
