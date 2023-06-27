import { CssBaseline, GeistProvider, Themes } from "@geist-ui/core";
import { Analytics } from "@vercel/analytics/react";

export const stupendousTheme = Themes.createFromLight({
  type: "magenta",
  palette: {
    link: "#d02670",
  },
});

export default function App({ Component, pageProps }) {
  return (
    <GeistProvider themes={[stupendousTheme]} themeType={"magenta"}>
      <CssBaseline />
      <Component {...pageProps} />
      <Analytics />
    </GeistProvider>
  );
}
