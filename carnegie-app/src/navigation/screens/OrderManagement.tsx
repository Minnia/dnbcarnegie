import { FlatList } from "react-native-gesture-handler";
import useGetInstruments from "../../api/hooks/useGetInstruments";
import { useState } from "react";
import { fuzzySearch, truncateText } from "../../utils/helpers.utils";
import { useNavigation } from "@react-navigation/native";
import { Container, Spacer } from "../../components/common/styled";
import Item from "../../components/common/Item";
import tokens from "../../core/tokens";
import Input from "../../components/common/Input";
import EmptyState from "../../components/common/EmptyState";
import { themes } from "../../core/themes";
import { Instrument } from "../../api/types";

const OrderManagement = () => {
  const { data: instruments } = useGetInstruments();
  const { navigate } = useNavigation<any>();

  const [searchParam, setSearchParam] = useState("");

  const onChangeSearch = (search: string) => {
    setSearchParam(search);
  };

  const noMatchingInstrument =
    searchParam &&
    instruments &&
    fuzzySearch(searchParam, instruments).length === 0;

  return (
    <>
      <Container
        backgroundColor={themes.light.colors.white}
        style={{ borderWidth: 1, borderColor: themes.light.colors.background }}
      >
        <Input
          placeholder='Search for instruments'
          iconName='search-outline'
          onChangeSearch={onChangeSearch}
          style={{
            margin: tokens.BASELINE,
            backgroundColor: themes.light.colors.white,
            shadowColor: themes.light.colors.black,

            borderWidth: 1,
            borderColor: themes.light.colors.carnegieGreen,
          }}
        />
      </Container>
      <Spacer size={tokens.BASELINE * 2} />
      <Container
        justifyContent='center'
        alignItems='center'
        style={{ flex: 1 }}
      >
        {!searchParam && (
          <EmptyState
            text='Search for instruments'
            subtitle='Your next order is just a few taps away'
            iconName='rocket-outline'
          />
        )}
        {noMatchingInstrument && (
          <Container
            justifyContent='center'
            alignItems='center'
            style={{ flex: 1 }}
          >
            <EmptyState
              text='No matching instruments found'
              subtitle='Try a different search'
              iconName='sad-outline'
            />
          </Container>
        )}
        {searchParam && instruments && (
          <FlatList
            data={fuzzySearch(searchParam, instruments)}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }: { item: Instrument }) => (
              <Container
                key={item.id}
                flexDirection='column'
                justifyContent='flex-start'
                alignItems='flex-start'
                width={350}
              >
                <Spacer size={4} />
                <Item
                  onPress={() => {
                    navigate("Order form", { instrument: item });
                  }}
                  leftIcon='podium-outline'
                  rightIcon='arrow-forward-outline'
                  item={item}
                />
                <Spacer size={4} />
              </Container>
            )}
          />
        )}
      </Container>
    </>
  );
};

export default OrderManagement;
