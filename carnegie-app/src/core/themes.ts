const neutrals = {
  black: "#0F0F0F",
  white: "#FFFFFF",
};

const background = {
  primaryGrey: "#EFEFE9",
  secondaryGrey: "#F5F5F5",
  tertiaryGrey: "#CCCCCC",
};

const systemColors = {
  error: "#D62215",
  danger: "#b1622aff",
  success: "#008000",
  warning: "#8A740E",
};

const textColors = {
  black: neutrals.black,
};

const brandPalette = {
  // Backgrounds
  background: background.primaryGrey,

  // System
  error: systemColors.error,
  danger: systemColors.danger,
  success: systemColors.success,
  warning: systemColors.warning,

  // Neutrals
  black: neutrals.black,
  white: neutrals.white,

  // Text
  text: textColors.black,
};

type ThemeConfig = {
  colors: {
    background: string;
    error: string;
    danger: string;
    success: string;
    warning: string;
    black: string;
    white: string;
    text: string;
  };
};

const light: ThemeConfig = {
  colors: {
    ...brandPalette,
  },
};

export const themes = {
  light,
};
