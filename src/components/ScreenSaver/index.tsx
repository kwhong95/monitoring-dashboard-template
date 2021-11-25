import { Container } from "../styles/screenSaverStyles";
import CardList from "./CardList";

interface Props {
  onClick: () => void;
}

const ScreenSaver: React.FC<Props> = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <CardList />
    </Container>
  );
};

export default ScreenSaver;
