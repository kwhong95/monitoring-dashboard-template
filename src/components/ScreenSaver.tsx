import { useCallback } from "react";
import {
  useScreenSaverState,
  useScreenSaverDispatch,
} from "../contexts/ScreenSaverContext";
import { Container } from "../styles/screenSaverStyles";
import CardList from "./CardList";

const ScreenSaver: React.FC = () => {
  const { active, wate_time } = useScreenSaverState();
  const dispatch = useScreenSaverDispatch();

  const screenSaverClicked = useCallback(() => {
    dispatch({
      type: "SET_ACTIVE",
      active: false,
    });

    startTimeOut();
  }, []);

  const startTimeOut = useCallback(() => {
    const waitTimeOut = setTimeout(() => {
      dispatch({
        type: "SET_ACTIVE",
        active: true,
      });
    }, wate_time);

    return waitTimeOut;
  }, [wate_time, dispatch]);

  return (
    <Container onClick={screenSaverClicked} active={active}>
      <CardList />
    </Container>
  );
};

export default ScreenSaver;
