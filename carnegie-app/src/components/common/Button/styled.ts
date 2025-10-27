import styled from "@emotion/native";
import { themes } from "../../../core/themes";
import tokens from "../../../core/tokens";
import { Variant } from "../types";

const getVariantStyle = (variant: Variant, disabled?: boolean) => {
  switch (variant) {
    case "primary":
      return {
        backgroundColor: themes.light.colors.carnegieGreen,
      };

    case "secondary":
      return {
        backgroundColor: themes.light.colors.buyGreen,
      };
    case "success":
      return {
        backgroundColor: themes.light.colors.success,
      };

    case "error":
      return {
        backgroundColor: themes.light.colors.error,
      };
    default:
      return {
        backgroundColor: themes.light.colors.background,
      };
  }
};

export const ButtonContainer = styled.View<{
  variant: Variant;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
}>`
  padding-vertical: ${tokens.BASELINE * 1.5 + "px"};
  padding-horizontal: ${tokens.BASELINE * 3 + "px"};
  border-radius: ${tokens.BASELINE + "px"};
  background-color: ${({ variant, disabled }) =>
    getVariantStyle(variant, disabled)};
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
  ${({ size }) =>
    size === "small"
      ? `padding-vertical: ${tokens.BASELINE + "px"};
         padding-horizontal: ${tokens.BASELINE * 2 + "px"};`
      : size === "large"
      ? `padding-vertical: ${tokens.BASELINE * 2 + "px"};
         padding-horizontal: ${tokens.BASELINE * 4 + "px"};`
      : ``}
`;
