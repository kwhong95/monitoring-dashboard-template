import { Container } from './screen-elements';

interface ScreenSaverProps {
  onClick: () => void
}

const ScreenSaver: React.FC<ScreenSaverProps> = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      SCREEN SAVER
    </Container>
  )
}

export default ScreenSaver;