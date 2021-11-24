import { ScreenSaverContextProvider } from "../contexts/ScreenSaverContext";
import Router from "../router/Router";
import { dark } from "../styles/theme";
import { ThemeProvider, Global } from "@emotion/react";
import { globalStyles } from "../styles/global";

const App = () => {
  return (
    <ScreenSaverContextProvider>
      <ThemeProvider theme={dark}>
        <Global styles={globalStyles} />
        <Router />
      </ThemeProvider>
    </ScreenSaverContextProvider>
  );
};

export default App;
