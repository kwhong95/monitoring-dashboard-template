import styled from "@emotion/styled";
import {
  useScreenSaverState,
  useScreenSaverDispatch,
} from "../contexts/ScreenSaverContext";

interface Props {
  // active: boolean;
}

interface State {
  active: boolean;
}

const Container = styled("div")<State>`
  display: ${(props) => (props.active ? "flex" : "none")};
`;

const ScreenSaver: React.FC<Props> = () => {
  const { active } = useScreenSaverState();
  const dispatch = useScreenSaverDispatch();

  const onClicked = () => {
    dispatch({
      type: "SET_ACTIVE",
      active: false,
    });
  };

  return (
    <Container active={active} onClick={onClicked}>
      <h1>ScreenSaver View</h1>
    </Container>
  );
};

export default ScreenSaver;
