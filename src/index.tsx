import { useEffect, useState, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';

const SCREENSAVER_DELAY_MS = 3000;
const SCREENSAVER_ACTIVE_TIME_MS = 7000;
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
    <main onClick={appTouched}>
      {screensaverActive && screensaverVisible && (
        <div
          id="screensaver"
          style={styles.screensaver as any}
          onClick={screensaverClicked}
        >
          SCREENSAVER
        </div>
      )}
    </main>
  );
}

const styles = {
  screensaver: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(100, 100, 150, 0.92)",
    fontSize: 32,
    color: "white"
  }
};

ReactDOM.render(<App />, document.querySelector("#root"));