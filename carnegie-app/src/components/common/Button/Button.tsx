import { TouchableOpacity, ViewStyle } from "react-native";
import { StyledText } from "../styled";
import { themes } from "../../../core/themes";

type Props = {
  title: string;
  onPress: () => void;
  fontSize?: number;
  fontWeight?: "normal" | "bold";
  style?: ViewStyle;
  variant?: "primary" | "secondary" | "success" | "error";
};

const Button = ({
  title,
  onPress,
  fontSize,
  fontWeight,
  style,
  variant,
}: Props) => {
  switch (variant) {
    case "primary":
      style = {
        backgroundColor: "#3B82F6",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: "center",
        ...style,
      };
      break;
    case "secondary":
      style = {
        backgroundColor: "#a25ba297",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: "center",
        ...style,
      };
      break;
    default:
      style = {
        backgroundColor: "#3B82F6",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: "center",
        ...style,
      };
  }
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <StyledText
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={themes.light.colors.text}
      >
        {title}
      </StyledText>
    </TouchableOpacity>
  );
};

export default Button;
