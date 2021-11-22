import { ScreenSaverContextProvider } from "../contexts/ScreenSaverContext";
import Router from "../router/Router";

const App = () => {
  return (
    <ScreenSaverContextProvider>
      <Router />
    </ScreenSaverContextProvider>
  );
};

export default App;
