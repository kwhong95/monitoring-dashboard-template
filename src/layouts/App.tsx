import { ScreenSaverContextProvider } from "../contexts/ScreenSaverContext";
import { ModalContextProvider } from "../contexts/ModalContext";
import { RealtimeDataContextProvider } from "contexts/RealtimeDataContext";
import Router from "../router/Router";
import { dark } from "../styles/theme";
import { ThemeProvider, Global } from "@emotion/react";
import { globalStyles } from "../styles/global";

const App = () => {
  return (
    <ScreenSaverContextProvider>
      <ModalContextProvider>
        <RealtimeDataContextProvider>
          <ThemeProvider theme={dark}>
            <Global styles={globalStyles} />
            <Router />
          </ThemeProvider>
        </RealtimeDataContextProvider>
      </ModalContextProvider>
    </ScreenSaverContextProvider>
  );
};

export default App;
