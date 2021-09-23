import { ReactComponent as Connacted } from '../assets/connected.svg';
import { ReactComponent as Disconnacted } from '../assets/disconnected.svg';

interface ConnectProps {
  connected: boolean;
  width: number;
}

const Connect: React.FC<ConnectProps> = ({ connected, width }) => {
  return connected ?  <Connacted width={`${width}px`}/> : <Disconnacted width={`${width}px`} />
}

export default Connect;
