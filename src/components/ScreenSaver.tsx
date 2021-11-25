import { useScreenSaverState } from "../contexts/ScreenSaverContext";
import { Container } from "../styles/screenSaverStyles";
import CardList from "./CardList";

interface Props {
  onClick: () => void;
}

const ScreenSaver: React.FC<Props> = ({ onClick }) => {
  const { active } = useScreenSaverState();

  return (
    <Container active={active} onClick={onClick}>
      <CardList />
    </Container>
  );
};

export default ScreenSaver;
