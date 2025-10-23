import { TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import useGetInstruments from "../../api/hooks/useGetInstruments";
import { useState } from "react";
import { fuzzySearch } from "../../utils/helpers.utils";
import { useNavigation } from "@react-navigation/native";
import { Container, Spacer, StyledText } from "../../components/common/styled";
import Item from "../../components/common/Item";
import tokens from "../../core/tokens";
import Ionicons from "@expo/vector-icons/Ionicons";
import { themes } from "../../core/themes";
import Input from "../../components/common/Input";

const OrderManagement = () => {
  const { data: instruments } = useGetInstruments();
  const { navigate } = useNavigation<any>();

  const [searchParam, setSearchParam] = useState("");

  const onChangeSearch = (search: string) => {
    setSearchParam(search);
  };

  return (
    <>
      <Input onChangeSearch={onChangeSearch} />
      <Container
        justifyContent='center'
        alignItems='center'
        style={{ flex: 1 }}
      >
        {!searchParam && (
          <View>
            <Ionicons
              style={{ textAlign: "center" }}
              name='rocket-outline'
              size={tokens.ICON.XLARGE}
              color='black'
            />
            <StyledText>Search for instruments</StyledText>
          </View>
        )}
        {searchParam &&
          instruments &&
          fuzzySearch(searchParam, instruments).length === 0 && (
            <Container
              justifyContent='center'
              alignItems='center'
              style={{ flex: 1 }}
            >
              <Ionicons
                style={{
                  textAlign: "center",
                }}
                name='sad-outline'
                size={tokens.ICON.XLARGE}
                color='black'
              />
              <StyledText fontWeight='bold'>
                No matching instruments found
              </StyledText>
              <StyledText
                style={{ textAlign: "center" }}
                fontSize={tokens.FONT_SIZE.SMALL}
              >
                Try a different search
              </StyledText>
            </Container>
          )}
        {searchParam && instruments && (
          <>
            <FlatList
              data={fuzzySearch(searchParam, instruments)}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Container
                  key={item.id}
                  flexDirection='column'
                  justifyContent='flex-start'
                  alignItems='flex-start'
                  width={350}
                  style={{
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                  }}
                >
                  <Spacer size={4} />
                  <TouchableOpacity
                    onPress={() => {
                      navigate("Order form", { instrument: item });
                    }}
                  >
                    <Item item={item.name} />
                  </TouchableOpacity>
                  <Spacer size={4} />
                </Container>
              )}
            />
          </>
        )}
      </Container>
    </>
  );
};

export default OrderManagement;
