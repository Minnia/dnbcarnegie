import { useNavigation } from "@react-navigation/native";
import useGetInstruments from "../../../api/hooks/instruments/useGetInstruments";
import { InstrumentStackParamList } from "../../navigation.types";
import { useEffect, useRef, useState } from "react";
import { fuzzySearch } from "../../../utils/helpers.utils";
import { Dimensions, TextInput } from "react-native";
import tokens from "../../../constants/tokens";
import Toast from "react-native-toast-message";

const useInstrumentsScreen = () => {
  const { data: instruments, error, isError } = useGetInstruments();
  const { navigate } = useNavigation<InstrumentStackParamList>();

  const [searchParam, setSearchParam] = useState("");

  const noMatchingInstrument =
    searchParam &&
    instruments &&
    fuzzySearch(searchParam, instruments).length === 0;

  const width = Dimensions.get("window").width - tokens.BASELINE * 4;

  const inputRef = useRef<TextInput>(null);

  const onChangeSearch = (search: string) => {
    setSearchParam(search);
  };

  const onClearSearch = () => {
    setSearchParam("");
    inputRef.current?.clear();
  };

  useEffect(() => {
    if (isError && error) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2:
          error instanceof Error
            ? error.message
            : "Failed to fetch instruments",
      });
    }
  }, [isError, error]);

  return {
    navigate,
    instruments,
    searchParam,
    onChangeSearch,
    onClearSearch,
    noMatchingInstrument,
    inputRef,
    width,
  };
};

export default useInstrumentsScreen;
