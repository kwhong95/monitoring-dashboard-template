import { ScreenSaverContextProvider } from "../contexts/ScreenSaverContext";
import Router from "../router/Router";
import { dark } from "../styles/theme";
import { ThemeProvider, Global } from "@emotion/react";
import { globalStyles } from "../styles/global";
import ScreenSaver from "../components/ScreenSaver";

const App = () => {
  return (
    <ScreenSaverContextProvider>
      <ThemeProvider theme={dark}>
        <Global styles={globalStyles} />
        <Router />
        <ScreenSaver />
      </ThemeProvider>
    </ScreenSaverContextProvider>
  );
};

export default App;
