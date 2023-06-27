import { Analytics } from "@vercel/analytics/react";
import { ChakraBaseProvider } from "@chakra-ui/react";
import theme from "@/utils/chakra";

export default function App({ Component, pageProps }) {
  return (
    <ChakraBaseProvider theme={theme}>
      <Component {...pageProps} />
      <Analytics />
    </ChakraBaseProvider>
  );
}
