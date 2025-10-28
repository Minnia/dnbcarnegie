import styled from "@emotion/native";
import tokens from "../../constants/tokens";
import { themes } from "../../constants/themes";
import { DimensionValue, FlexAlignType, TextStyle } from "react-native";

export const StyledText = styled.Text<{
  fontSize?: number;
  fontWeight?: "normal" | "bold";
  color?: string;
  textAlign?: TextStyle["textAlign"];
  paddingHorizontal?: number;
}>(({ fontSize, fontWeight, color, textAlign, paddingHorizontal }) => ({
  fontSize: fontSize || tokens.FONT_SIZE.DEFAULT,
  fontWeight: (fontWeight ||
    tokens.FONT_WEIGHT.NORMAL) as TextStyle["fontWeight"],
  color: color || themes.light.colors.text,
  paddingHorizontal: paddingHorizontal || 0,
  textAlign: textAlign || "left",
}));

export const Container = styled.View<{
  flexDirection?: "row" | "column";
  borderRadius?: number;
  backgroundColor?: string;
  height?: DimensionValue;
  width?: DimensionValue;
  alignItems?: FlexAlignType;
  paddingHorizontal?: number;
  paddingVertical?: number;
  shadowColor?: string;
  shadowOffset?: { width: number; height: number };
  shadowOpacity?: number;
  shadowRadius?: number;
  elevation?: number;
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | undefined;
}>(
  ({
    flexDirection,
    borderRadius,
    backgroundColor,
    height,
    width,
    alignItems,
    justifyContent,
    paddingHorizontal,
    paddingVertical,
    shadowColor,
    shadowOffset,
    shadowOpacity,
    shadowRadius,
    elevation,
  }) => ({
    flexDirection: flexDirection || "column",
    borderRadius: borderRadius || 0,
    backgroundColor: backgroundColor || "transparent",
    ...(height && { height }),
    ...(width && { width }),
    ...(alignItems && { alignItems }),
    ...(justifyContent && { justifyContent }),
    ...(paddingHorizontal && { paddingHorizontal }),
    ...(paddingVertical && { paddingVertical }),
    ...(shadowColor && { shadowColor }),
    ...(shadowOffset && { shadowOffset }),
    ...(shadowOpacity && { shadowOpacity }),
    ...(shadowRadius && { shadowRadius }),
    ...(elevation && { elevation }),
  })
);

export const Spacer = styled.View<{ size: number }>(({ size }) => ({
  height: size,
  width: size,
}));
