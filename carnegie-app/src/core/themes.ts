const neutrals = {
  black: "#0F0F0F",
  white: "#FFFFFF",
};

const brandColors = {
  carnegieGreen: "#00693C",
  buyGreen: "#E6F4ED",
  sellRed: "#FDEDED",
  carnegieRed: "#C1272D",
};

const background = {
  primaryGrey: "#EFEFE9",
  secondaryGrey: "#F5F5F5",
  tertiaryGrey: "#CCCCCC",
};

const card = {
  background: "#afc39cff",
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

  // Brand
  carnegieGreen: brandColors.carnegieGreen,
  buyGreen: brandColors.buyGreen,
  sellRed: brandColors.sellRed,
  carnegieRed: brandColors.carnegieRed,

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

  // Containers and cards
  cardBackground: card.background,
};

type ThemeConfig = {
  colors: {
    carnegieGreen: string;
    buyGreen: string;
    sellRed: string;
    carnegieRed: string;
    background: string;
    cardBackground: string;
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
