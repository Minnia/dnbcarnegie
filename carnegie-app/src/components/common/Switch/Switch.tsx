import { TouchableOpacity, View, Animated } from "react-native";
import { useEffect, useRef } from "react";
import { themes } from "../../../core/themes";
import { StyledText } from "../styled";
import tokens from "../../../core/tokens";

interface TextSwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  leftText: string;
  rightText: string;
  activeColor?: string;
  inactiveColor?: string;
}

const TextSwitch = ({
  value,
  onValueChange,
  leftText,
  rightText,
  activeColor = themes.light.colors.success,
  inactiveColor = "#E5E7EB",
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
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => onValueChange(!value)}
      style={{
        width: 200,
        height: 48,
        backgroundColor: inactiveColor,
        borderRadius: 24,
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
        padding: 4,
      }}
    >
      <Animated.View
        style={{
          position: "absolute",
          left: tokens.BASELINE / 2,
          width: 96,
          height: 40,
          backgroundColor: activeColor,
          borderRadius: 20,
          transform: [{ translateX: thumbPosition }],
        }}
      />

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        <StyledText
          fontSize={tokens.FONT_SIZE.DEFAULT}
          fontWeight={value ? "bold" : "normal"}
          color={!value ? "#FFFFFF" : "#6B7280"}
        >
          {leftText}
        </StyledText>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        <StyledText
          fontSize={tokens.FONT_SIZE.DEFAULT}
          fontWeight={value ? "normal" : "bold"}
          color={value ? "#FFFFFF" : "#6B7280"}
        >
          {rightText}
        </StyledText>
      </View>
    </TouchableOpacity>
  );
};

export default TextSwitch;
