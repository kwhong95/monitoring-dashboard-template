import { useEffect, useState, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './global-style';
import { AppContainer } from './elements';

// Screen
import ScreenSaver from './screen/screen-saver';


const SCREENSAVER_DELAY_MS = 3000;
const SCREENSAVER_ACTIVE_TIME_MS = 10000000000;
const SCREENSAVER_INACTIVE_TIME_MS = 5000;

const App = () => {
  const [screensaverActive, setScreensaverActive] = useState<boolean>(true);
  const [screensaverVisible, setScreensaverVisible] = useState<boolean>(true);
  const screensaverTimeout = useRef<any>();
  const secondTimer = useRef<any>();

  const activeScreensaver = useCallback(() => {
    setScreensaverActive(true);
    setScreensaverVisible(true);
    loop();

    function loop() { 
      const timeRef = setTimeout(() => {
        setScreensaverActive(false);
        const timeRef2 = setTimeout(() => {
          setScreensaverVisible(false);
          loop();
        }, SCREENSAVER_INACTIVE_TIME_MS);
        secondTimer.current = timeRef2;
      }, SCREENSAVER_ACTIVE_TIME_MS);
      secondTimer.current = timeRef;
    }
  }, []);

  useEffect(() => {
    activeScreensaver();
  }, [ activeScreensaver ]);

  const screensaverClicked = useCallback(() => {
    setScreensaverActive(false);
    startTimeout();
  }, []);

  const startTimeout = useCallback(() => {
    clearTimeout(screensaverTimeout.current);
    clearTimeout(secondTimer.current);
    const timeout = setTimeout(() => activeScreensaver(), SCREENSAVER_DELAY_MS);
    screensaverTimeout.current = timeout;
  }, []);

  const appTouched = useCallback((ev) => {
    if (ev.target.id !== "screensaver") {
      startTimeout();
    }
  }, []);

  return (
    <AppContainer onClick={appTouched}>
      <GlobalStyle />
      {screensaverActive && screensaverVisible && (
        <ScreenSaver onClick={screensaverClicked} />
      )}
    </AppContainer>
  );
}


ReactDOM.render(<App />, document.querySelector("#root"));