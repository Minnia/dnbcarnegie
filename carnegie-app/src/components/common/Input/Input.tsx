import { Dimensions, TextInput, ViewStyle } from "react-native";
import { Container } from "../styled";
import Ionicons from "@expo/vector-icons/Ionicons";
import { themes } from "../../../core/themes";
import tokens from "../../../core/tokens";

const Input = ({
  onChangeText,
  placeholder = "Search",
  keyboardType = "default",
  onBlur,
  onClear,
  iconName,
  style,
}: {
  onChangeText: (text: string) => void;
  onBlur?: () => void;
  onClear?: () => void;
  placeholder?: string;
  keyboardType?: "default" | "numeric";
  iconName?: keyof typeof Ionicons.glyphMap;
  style?: ViewStyle;
}) => {
  return (
    <Container
      paddingHorizontal={tokens.BASELINE * 2}
      borderRadius={tokens.BASELINE}
      height={Dimensions.get("window").height * 0.07}
      justifyContent='space-between'
      flexDirection='row'
      style={style}
    >
      <TextInput
        style={{ flex: 1 }}
        onChangeText={(text) => onChangeText(text)}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onBlur={onBlur}
      />
      {iconName && (
        <Ionicons
          onPress={onClear}
          name={iconName}
          size={tokens.ICON.DEFAULT}
          color={themes.light.colors.text}
          style={{
            marginRight: tokens.BASELINE,
            paddingTop: tokens.BASELINE * 2,
          }}
        />
      )}
    </Container>
  );
};

export default Input;
