export const designTokens = {
  colors: {
    primitives: {
      neutral: {
        50: "#fafafa",
        100: "#f4f4f5", 
        200: "#e4e4e7",
        300: "#d4d4d8",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b",
        950: "#09090b"
      },
      primary: {
        200: "#e4e4e7",
        400: "#a1a1aa"
      }
    },
    semantic: {
      text: {
        primary: "#0a0a0a",
        secondary: "rgba(10, 10, 10, 0.7)",
        muted: "rgba(10, 10, 10, 0.5)",
        inverse: "#fafafa"
      },
      background: {
        primary: "#ffffff",
        elevated: "#f4f4f5"
      },
      interactive: {
        primary: "#18181b",
        secondary: "#f4f4f5",
        primaryHover: "#27272a",
        accent: "#f59e0b"
      },
      border: {
        default: "#e4e4e7",
        subtle: "#f4f4f5"
      }
    }
  },
  spacing: {
    0: "0",
    0.5: "0.125rem",
    1: "0.25rem",
    2: "0.5rem", 
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    32: "8rem"
  },
  typography: {
    scale: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem", 
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem"
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em"
    },
    lineHeights: {
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2
    },
    weights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    }
  },
  containerWidths: {
    narrow: "640px",
    default: "1024px",
    wide: "1280px"
  },
  borderRadius: {
    sm: "0.125rem",
    md: "0.375rem",
    lg: "0.5rem"
  },
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
  },
  animation: {
    durations: {
      fast: "150ms",
      normal: "250ms",
      slow: "350ms"
    },
    transitions: {
      all: "all 250ms ease-out",
      color: "color 250ms ease-out",
      transform: "transform 250ms ease-out"
    }
  }
};