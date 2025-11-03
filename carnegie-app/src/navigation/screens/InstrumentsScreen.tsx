import { FlatList } from "react-native-gesture-handler";
import { Suspense } from "react";
import { fuzzySearch } from "../../utils/helpers.utils";
import { Container, Spacer } from "../../components/common/styled";
import Item from "../../components/common/Item";
import tokens from "../../constants/tokens";
import Input from "../../components/common/Input";
import EmptyState from "../../components/common/EmptyState";
import { themes } from "../../constants/themes";
import { Screens } from "../screen.types";
import { Text } from "react-native";
import { Instrument } from "../../api/types";
import useInstrumentsScreen from "./hooks/useInstrumentsScreen";

const InstrumentsScreen = () => {
  const {
    inputRef,
    onChangeSearch,
    onClearSearch,
    searchParam,
    noMatchingInstrument,
    width,
    instruments,
    navigate,
  } = useInstrumentsScreen();
  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <Container backgroundColor={themes.light.colors.white}>
        <Input
          inputRef={inputRef}
          placeholder='Search for instruments'
          iconName={searchParam ? "close-outline" : "search-outline"}
          onChangeText={onChangeSearch}
          onClear={onClearSearch}
          style={{
            margin: tokens.BASELINE,
            backgroundColor: themes.light.colors.white,
            shadowColor: themes.light.colors.black,
            borderWidth: 1,
            borderColor: themes.light.colors.carnegieGreen,
          }}
        />
      </Container>
      <Spacer size={16} />
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
          <EmptyState
            text='No matching instruments found'
            subtitle='Try a different search'
            iconName='sad-outline'
          />
        )}
        {searchParam && instruments && (
          <FlatList
            data={fuzzySearch(searchParam, instruments)}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Container
                key={item.id}
                flexDirection='column'
                justifyContent='flex-start'
                alignItems='flex-start'
                width={width}
              >
                <Spacer size={4} />
                <Item
                  onPress={() => {
                    navigate(Screens.ORDER_FORM, { instrument: item });
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
    </Suspense>
  );
};

export default InstrumentsScreen;
