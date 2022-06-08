const baseTheme = {
  space: [0, 2, 4, 8, 16, 32],
  padding: [8, 16, 24],
  margin: [90, 100, 110],
  fontSizes: [14, 16, 18, 24, 32, 64, 72],
  colors: {
    black: '#000000',
    white: '#ffffff',
    lightCGreen: "#8cd6bd",
    darkGreen: "#004761",
    grayScale: "#373737"
  },
  radii: [16, 24, 32]
};

const theme = {
  ...baseTheme,
  boxs: {
    primary: {
      backgroundColor: baseTheme.colors.darkGreen,
    },
    secondary: {
      backgroundColor: baseTheme.colors.grayScale,
    }
  },
  buttons: {
    primary: {
      backgroundColor: baseTheme.colors.lightCGreen,
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
  buttonTextStyles: {
    small: {
      fontSize: baseTheme.fontSizes[2],
      padding: baseTheme.padding[0],
    },
    medium: {
      fontSize: baseTheme.fontSizes[3],
      padding: baseTheme.padding[1],
    },
    large: {
      fontSize: baseTheme.fontSizes[4],
      padding: baseTheme.padding[2],
    }
  },
  buttonSizes: {
    small: {
      width: 140,
      borderRadius: baseTheme.radii[0]
    },
    medium: {
      width: 160,
      borderRadius: baseTheme.radii[1]
    },
    large: {
      width: 180,
      borderRadius: baseTheme.radii[2]
    }
  },
  counterStyles: {
    small: {
      width: 140,
      fontSize: baseTheme.fontSizes[4],
      padding: baseTheme.padding[0],
      margin: `${baseTheme.margin[0]}px 0px`,
    },
    medium: {
      width: 160,
      fontSize: baseTheme.fontSizes[5],
      padding: baseTheme.padding[1],
      margin: `${baseTheme.margin[1]}px 0px`,
    },
    large: {
      width: 180,
      fontSize: baseTheme.fontSizes[6],
      padding: baseTheme.padding[2],
      margin: `${baseTheme.margin[2]}px 0px`,
    }
  },
  counterTextStyles: {
    primary: {
      color: baseTheme.colors.lightCGreen,
    },
    secondary: {
      color: baseTheme.colors.white,
    },
  }
}
export default theme