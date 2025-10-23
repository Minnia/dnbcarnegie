import { TextInput } from "react-native";
import { Container } from "../styled";
import Ionicons from "@expo/vector-icons/Ionicons";
import { themes } from "../../../core/themes";

const Input = ({
  onChangeSearch,
}: {
  onChangeSearch: (text: string) => void;
}) => {
  return (
    <Container
      style={{
        padding: 16,
        margin: 16,
        display: "flex",
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: "space-between",
      }}
    >
      <TextInput
        onChangeText={(text) => onChangeSearch(text)}
        placeholder='Instrument name'
      />
      <Ionicons
        name='search-outline'
        size={24}
        color={themes.light.colors.text}
        style={{ marginRight: 8 }}
      />
    </Container>
  );
};

export default Input;
