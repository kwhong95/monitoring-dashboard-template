import { useCallback } from "react";
import styled from "@emotion/styled";
import {
  useScreenSaverState,
  useScreenSaverDispatch,
} from "../contexts/ScreenSaverContext";

interface State {
  active: boolean;
}

const Container = styled("div")<State>`
  display: ${(props) => (props.active ? "flex" : "none")};
`;

const ScreenSaver: React.FC = () => {
  const { active, wate_time } = useScreenSaverState();
  const dispatch = useScreenSaverDispatch();

  const screenSaverClicked = useCallback(() => {
    dispatch({
      type: "SET_ACTIVE",
      active: false,
    });
    startTimeOut();
  }, [dispatch]);

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
    <Container active={active} onClick={screenSaverClicked}>
      <h1>ScreenSaver View</h1>
    </Container>
  );
};

export default ScreenSaver;
