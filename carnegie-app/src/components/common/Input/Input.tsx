import { TextInput, ViewStyle } from "react-native";
import { Container } from "../styled";
import Ionicons from "@expo/vector-icons/Ionicons";
import { themes } from "../../../core/themes";
import tokens from "../../../core/tokens";

const Input = ({
  onChangeSearch,
  placeholder = "Search",
  keyboardType = "default",
  onBlur,
  iconName,
  style,
}: {
  onChangeSearch: (text: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  keyboardType?: "default" | "numeric";
  iconName?: string;
  style?: ViewStyle;
}) => {
  return (
    <Container
      paddingHorizontal={tokens.BASELINE * 2}
      paddingVertical={tokens.BASELINE * 2}
      borderRadius={tokens.BASELINE}
      justifyContent='space-between'
      flexDirection='row'
      style={style}
    >
      <TextInput
        onChangeText={(text) => onChangeSearch(text)}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onBlur={onBlur}
      />
      {iconName && (
        <Ionicons
          name={iconName as any}
          size={tokens.ICON.DEFAULT}
          color={themes.light.colors.text}
          style={{ marginRight: tokens.BASELINE }}
        />
      )}
    </Container>
  );
};

export default Input;
