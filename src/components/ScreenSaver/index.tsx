import { Container } from "./styles";
import CardList from "../Card";

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
