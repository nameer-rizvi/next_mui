import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "../styles/globals.css";
import { HTMLHead } from "../components";
import { ThemeProvider } from "../providers";
import CssBaseline from "@mui/material/CssBaseline";

const MyApp = ({ Component, pageProps }) => (
  <>
    <HTMLHead />
    <ThemeProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default MyApp;
