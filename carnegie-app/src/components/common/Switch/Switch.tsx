import { TouchableOpacity, Animated } from "react-native";
import { useEffect, useRef } from "react";
import { themes } from "../../../constants/themes";
import { Container, StyledText } from "../styled";
import tokens from "../../../constants/tokens";

interface TextSwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  leftText: string;
  rightText: string;
  leftActiveColor?: string;
  rightActiveColor?: string;
  activeColor?: string;
  inactiveColor?: string;
  width?: number;
  height?: number;
}

const TextSwitch = ({
  value,
  onValueChange,
  leftText,
  rightText,
  activeColor = themes.light.colors.success,
  rightActiveColor = themes.light.colors.carnegieRed,
  leftActiveColor = themes.light.colors.carnegieGreen,
  inactiveColor = "#E5E7EB",
  width = 200,
  height = tokens.ICON.XLARGE,
}: TextSwitchProps) => {
  const animation = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [value, animation]);

  const thumbPosition = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });

  return (
    <Container alignItems='center' justifyContent='center'>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => onValueChange(!value)}
        style={{
          width,
          height,
          backgroundColor: inactiveColor,
          borderRadius: tokens.BASELINE * 2,
          flexDirection: "row",
          alignItems: "center",
          position: "relative",
          padding: tokens.BASELINE / 2,
        }}
      >
        <Animated.View
          style={{
            position: "absolute",
            left: tokens.BASELINE / 2,
            width: width / 2,
            height: height - tokens.BASELINE,
            backgroundColor: activeColor,
            borderRadius: tokens.BASELINE * 2,
            transform: [{ translateX: thumbPosition }],
          }}
        />

        <Container
          alignItems='center'
          justifyContent='center'
          style={{
            flex: 1,
            zIndex: 1,
          }}
        >
          <StyledText
            fontSize={tokens.FONT_SIZE.DEFAULT}
            fontWeight={value ? "bold" : "normal"}
            color={
              !value ? themes.light.colors.white : themes.light.colors.text
            }
          >
            {leftText}
          </StyledText>
        </Container>

        <Container
          alignItems='center'
          justifyContent='center'
          style={{
            flex: 1,
            zIndex: 1,
          }}
        >
          <StyledText
            fontSize={tokens.FONT_SIZE.DEFAULT}
            fontWeight={value ? "normal" : "bold"}
            color={value ? themes.light.colors.white : themes.light.colors.text}
          >
            {rightText}
          </StyledText>
        </Container>
      </TouchableOpacity>
    </Container>
  );
};

export default TextSwitch;
