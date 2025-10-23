import Ionicons from "@expo/vector-icons/Ionicons";

import tokens from "../../../core/tokens";
import { Container, StyledText } from "../styled";
import { IconProps } from "@expo/vector-icons/build/createIconSet";
import Button from "../Button";

const EmptyState = ({
  text,
  subtitle,
  icon,
  iconName,
  cta,
  ctaTitle,
}: {
  text: string;
  subtitle?: string;
  icon?: string;
  // TODO: type
  iconName?: IconProps<any>["name"];
  cta?: () => void;
  ctaTitle?: string;
}) => {
  return (
    <Container justifyContent='center' alignItems='center' style={{ flex: 1 }}>
      {icon && iconName && (
        <Ionicons
          style={{
            textAlign: "center",
          }}
          name={iconName || "sad-outline"}
          size={tokens.ICON.XLARGE}
          color='black'
        />
      )}
      <StyledText fontWeight='bold'>{text}</StyledText>
      {subtitle && (
        <StyledText
          style={{ textAlign: "center" }}
          fontSize={tokens.FONT_SIZE.SMALL}
        >
          {subtitle}
        </StyledText>
      )}
      {cta && <Button title={ctaTitle || "Try again"} onPress={cta} />}
    </Container>
  );
};

export default EmptyState;
