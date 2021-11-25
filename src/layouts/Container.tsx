import { useCallback, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import {
  useScreenSaverDispatch,
  useScreenSaverState,
} from "../contexts/ScreenSaverContext";
import ScreenSaver from "../components/ScreenSaver";

const Container: React.FC = ({ children }) => {
  const { active, wait_time } = useScreenSaverState();
  const dispatch = useScreenSaverDispatch();
  const countTimeout = useRef<NodeJS.Timeout | undefined>();

  const activeScreenSaver = useCallback(() => {
    dispatch({ type: "@screensaver/ACTIVE", active: true });
  }, [dispatch]);

  const startTimeout = useCallback(() => {
    clearTimeout(countTimeout.current as NodeJS.Timeout);
    const timeout = setTimeout(() => {
      activeScreenSaver();
    }, wait_time);
    countTimeout.current = timeout;
  }, [countTimeout, wait_time, activeScreenSaver]);

  useEffect(() => {
    activeScreenSaver();
  }, [activeScreenSaver]);

  const screensaverClicked = useCallback(() => {
    dispatch({ type: "@screensaver/ACTIVE", active: false });
    startTimeout();
  }, [dispatch, startTimeout]);

  const appTouched = useCallback(
    (e) => {
      if (e.target.id !== "scrennsaver") {
        startTimeout();
      }
    },
    [startTimeout]
  );

  return (
    <Wrapper onClick={appTouched}>
      {active && <ScreenSaver onClick={screensaverClicked} />}
      {children}
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  ${(props) => ({
    background: props.theme.colors.bgColor,
    color: props.theme.colors.fontColor,
  })};
`;

export default Container;
