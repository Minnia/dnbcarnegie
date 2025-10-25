import { TouchableOpacity } from "react-native";
import { StyledText } from "../styled";
import { themes } from "../../../core/themes";
import * as S from "./styled";
import { Variant } from "../types";

type Props = {
  title: string;
  onPress: () => void;
  fontSize?: number;
  fontWeight?: "normal" | "bold";
  variant: Variant;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
};

const getButtonTextColor = (variant: Variant) => {
  switch (variant) {
    case "primary":
    case "secondary":
    case "error":
    case "success":
      return themes.light.colors.white;
    default:
      return themes.light.colors.text;
  }
};

const Button = ({
  title,
  onPress,
  fontSize,
  fontWeight,
  variant,
  disabled,
  size,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <S.ButtonContainer size={size} disabled={disabled} variant={variant}>
        <StyledText
          fontSize={fontSize}
          fontWeight={fontWeight}
          color={getButtonTextColor(variant)}
        >
          {title}
        </StyledText>
      </S.ButtonContainer>
    </TouchableOpacity>
  );
};

export default Button;
