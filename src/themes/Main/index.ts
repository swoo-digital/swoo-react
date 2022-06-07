import colors from "./colors";

const baseTheme = {
  space: [0, 2, 4, 8, 16, 32],
  fontSizes: [14, 16, 18, 24, 32],
  colors,
  radii: [16, 24, 32]
};

export default {
  ...baseTheme,
  buttons: {
    primary: {
      backgroundColor: baseTheme.colors.white,
    },
    secondary: {
      backgroundColor: baseTheme.colors.black,
    }
  },
  buttonText: {
    primary: {
      color: baseTheme.colors.black,
    },
    secondary: {
      color: baseTheme.colors.white,
    },
  },
  buttonSizes: {
    small: {
      fontSize: baseTheme.fontSizes[2],
      padding: `8px 16px`,
      borderRadius: baseTheme.radii[0]
    },
    medium: {
      fontSize: baseTheme.fontSizes[2],
      padding: `8px 16px`,
      borderRadius: baseTheme.radii[1]
    },
    large: {
      fontSize: baseTheme.fontSizes[3],
      padding: `12px 24px`,
      borderRadius: baseTheme.radii[2]
    }
  }
}