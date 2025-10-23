import styled from "@emotion/native";
import tokens from "../../core/tokens";
import { themes } from "../../core/themes";
import { DimensionValue, FlexAlignType, TextStyle } from "react-native";

export const Card = styled.View<{ backgroundColor?: string }>(
  ({ backgroundColor }) => ({
    backgroundColor: backgroundColor || themes.light.colors.white,
    padding: tokens.BASELINE * 2,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: tokens.BASELINE,
  })
);

export const StyledText = styled.Text<{
  fontSize?: number;
  fontWeight?: "normal" | "bold";
  color?: string;
  textAlign?: TextStyle["textAlign"];
}>(({ fontSize, fontWeight, color, textAlign }) => ({
  fontSize: fontSize || tokens.FONT_SIZE.DEFAULT,
  fontWeight: (fontWeight ||
    tokens.FONT_WEIGHT.NORMAL) as TextStyle["fontWeight"],
  color: color || themes.light.colors.text,
  textAlign: textAlign || "left",
}));

export const Container = styled.View<{
  flexDirection?: "row" | "column";
  backgroundColor?: string;
  height?: DimensionValue;
  width?: DimensionValue;
  alignItems?: FlexAlignType;
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
    backgroundColor,
    height,
    width,
    alignItems,
    justifyContent,
  }) => ({
    flexDirection: flexDirection || "column",
    backgroundColor: backgroundColor || themes.light.colors.background,
    ...(height && { height }),
    ...(width && { width }),
    ...(alignItems && { alignItems }),
    ...(justifyContent && { justifyContent }),
  })
);

export const Spacer = styled.View<{ size: number }>(({ size }) => ({
  height: size,
  width: size,
}));
