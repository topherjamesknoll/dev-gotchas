import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#fff0f7",
      100: "#ffd6e8",
      200: "#ffafd2",
      300: "#ff7eb6",
      400: "#ee5396",
      500: "#d02670",
      600: "#9f1853",
      700: "#740937",
      800: "#510224",
      900: "#2a0a18",
    },
    gray: {
      50: "#f8f8f8",
      100: "#ebebeb",
      150: "#dddddd",
      200: "#d0d0d0",
      250: "#c3c3c3",
      300: "#b5b5b5",
      350: "#a8a8a8",
      400: "#9a9a9a",
      450: "#8d8d8d",
      500: "#808080",
      550: "#727272",
      600: "#656565",
      650: "#575757",
      700: "#4a4a4a",
      750: "#3c3c3c",
      800: "#2f2f2f",
      850: "#222222",
      900: "#141414",
      950: "#070707",
    },
  },
  styles: {
    global: {
      "html, body": {
        bg: "white",
        color: "gray.800",
        fontSize: 18,
        overflowX: "hidden",
        lineHeight: 2,
      },
    },
  },
  fonts: {
    heading: "transducer, sans-serif",
    body: "transducer, sans-serif",
    mono: "anonymous-pro, monospace",
  },
  fontWeights: {
    bold: 900,
  },
  sizes: {
    container: {
      xl: "102rem",
    },
  },
  components: {
    Heading: {
      baseStyle: {
        color: "black",
        fontWeight: "bold",
        my: 8,
      },
    },
    Text: {
      baseStyle: {
        my: 4,
      },
    },
    Link: {
      baseStyle: {
        color: "primary.500",
        _hover: {
          textDecoration: "none",
        },
      },
    },
  },
});

export default theme;
