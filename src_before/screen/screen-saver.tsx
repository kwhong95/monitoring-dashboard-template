import { Container } from './screen-elements';
import ItemList from '../components/item-list';

interface ScreenSaverProps {
  onClick: () => void
}

const ScreenSaver: React.FC<ScreenSaverProps> = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <ItemList />
    </Container>
  )
}

export default ScreenSaver;