import React from "react";
import { ComposedProviders } from "../src/store/composeProviders";
import AppWrapper from "../src/Components/AppWrapper";

import "../src/config/global.css";


export default function MyApp({ Component, pageProps }) {

  return (
    // <Login />
    // <ThemeProvider theme={theme}>
    <ComposedProviders>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </ComposedProviders>

    // </ThemeProvider>
  );
}

/**
  const [darkMode, setDarkMode] = React.useState(false);

  const lightTheme = {
    background: "#fff",
  };

  const darkTheme = {
    background: "#000",
  };

  const switchTheme = React.useCallback(() => {
    setDarkMode((current) => !current);
  }, [setDarkMode]);

  const theme = React.useMemo(
    () => (darkMode ? darkTheme : lightTheme),
    [darkMode]
 */