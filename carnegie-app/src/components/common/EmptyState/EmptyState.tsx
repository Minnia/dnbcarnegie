import Ionicons from "@expo/vector-icons/Ionicons";
import tokens from "../../../constants/tokens";
import { Container, Spacer, StyledText } from "../styled";
import { IconProps } from "@expo/vector-icons/build/createIconSet";
import Button from "../Button";
import { Variant } from "../types";
import { View } from "react-native";

const EmptyState = ({
  text,
  subtitle,
  iconName,
  cta,
  ctaTitle,
  variant,
}: {
  text: string;
  subtitle?: string;
  iconName?: IconProps<keyof typeof Ionicons.glyphMap>["name"];
  cta?: () => void;
  ctaTitle?: string;
  variant?: Variant;
}) => {
  return (
    <Container justifyContent='center' alignItems='center' style={{ flex: 1 }}>
      {iconName && (
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
        <View>
          <StyledText textAlign='center' fontSize={tokens.FONT_SIZE.SMALL}>
            {subtitle}
          </StyledText>
          <Spacer size={tokens.BASELINE * 2} />
        </View>
      )}
      {cta && (
        <Button
          variant={variant || "primary"}
          title={ctaTitle || "Try again"}
          onPress={cta}
        />
      )}
    </Container>
  );
};

export default EmptyState;
