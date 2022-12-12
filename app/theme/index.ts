import { extendTheme } from "@chakra-ui/react"
import type { StyleFunctionProps } from "@chakra-ui/theme-tools"
import type { Dict } from "@chakra-ui/utils"

const breakpoints = {
  sm: "40rem", // 640
  md: "48em", // 768
  lg: "62em", // 992
  xl: "80em", // 1280
  "2xl": "85.375em", // 1366
  "3xl": "90em", // 1440
  "4xl": "96em", // 1536
  "5xl": "108rem", // 1728
  "6xl": "120em", // 1920
}

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
}

export const theme = extendTheme({
  breakpoints,
  config: {
    cssVarPrefix: "culturedcurated",
    useSystemColorMode: false,
    initialColorMode: "light",
  },
  styles: {
    global: (props: Dict<any> | StyleFunctionProps) => ({
      "html, body, #__next": {
        height: "100%",
        bg: "#3e1021",
        width: "100%",
        scrollBehavior: "smooth",
      },
      body: {
        fontSize: "md",
        fontFamily: '"Lato", sans-serif',
        lineHeight: "tall",
        bg: "#3e1021",
        bottom: 0,
        color: "white",
        overflowY: "scroll",
      },
      html: {
        margin: 0,
        padding: 0,
        // overflow: "hidden",
      },
      "::selection": {
        bg: "#351772",
        color: "white",
        rounded: "lg",
      },
      "a:hover": {
        color: "#efd8bc",
      },
    }),
  },
  colors: {
    brand: {
      100: "#f7f7f7",
      200: "#e6e9ee",
      300: "#dde0e4",
      400: "#818890",
      500: "#535661",
      600: "#4b4c53",
      700: "#3a3d4a",
      800: "#2e3039",
      900: "#1f2028",
    },
    primaryGreen: "#3F4E4F",
    primaryBackground: "#3e1021",
    bgBlack: "#121212",
    bgLight: "rgb(208, 211, 225)",
    darkBlue: "#351772",
    primaryBg: "#261546",
    gold: "#efd8bc",
    headingText: "rgb(255, 221,81)",
    primaryRed: "#f91e53",
    primaryColorScheme: {
      500: "#256CFA",
      600: "#256CFA",
    },
    lightColorScheme: {
      500: "#f91e53",
      600: "#f91e53",
    },
  },
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "#3F4E4F",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 4,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
  fonts: {
    body: '"Lato", Helvetica, Arial, sans-serif',
    heading: '"Cormorant Garamond", Helvetica, Arial, sans-serif',
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  space: {
    14: "3.5rem",
    60: "15rem",
    66: "17.5rem",
    70: "18rem",
    75: "19rem",
    80: "20rem",
    82: "21rem",
    85: "23rem",
    90: "25rem",
    95: "26rem",
    108: "27rem",
    109: "29rem",
    110: "30rem",
    115: "32rem",
    120: "35rem",
    122: "37rem",
    123: "40rem",
    125: "45rem",
    127: "48rem",
    128: "50rem",
    130: "55rem",
    132: "57rem",
    135: "60rem",
    136: "62rem",
    137: "65rem",
    139: "67rem",
    140: "70rem",
    145: "76rem",
    160: "97.5rem",
  },
  sizes: {
    14: "3.5rem",
    60: "15rem",
    66: "17.5rem",
    70: "18rem",
    75: "19rem",
    80: "20rem",
    82: "21rem",
    85: "23rem",
    90: "25rem",
    95: "26rem",
    108: "27rem",
    109: "28rem",
    110: "30rem",
    115: "32rem",
    117: "33rem",
    120: "35rem",
    122: "37rem",
    123: "42rem",
    125: "45rem",
    127: "48rem",
    128: "50rem",
    130: "55rem",
    132: "57rem",
    135: "60rem",
    136: "62rem",
    137: "65rem",
    139: "67rem",
    140: "70rem",
    145: "76rem",
    160: "97.5rem",
  },
  transition: {
    easing: {
      "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
      "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
    },
  },
})
