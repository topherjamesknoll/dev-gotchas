import { ChakraBaseProvider } from "@chakra-ui/react";
import theme from "@/utils/chakra";
import Script from "next/script";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [isProduction, setIsProduction] = useState(false);

  useEffect(() => {
    window.location.hostname === "devgotchas.com" && setIsProduction(true);
    console.log(
      "%c🤯 DEV GOTCHAS\ntopherjamesknoll@gmail.com\n",
      "color: #d02670"
    );
  }, []);

  return (
    <div>
      {isProduction && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy={"afterInteractive"}
        />
      )}
      <Head>
        {isProduction && (
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
              });
            `}
          </script>
        )}
        <meta name={"viewport"} content={"width=device-width"} />
      </Head>
      <ChakraBaseProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraBaseProvider>
    </div>
  );
}
