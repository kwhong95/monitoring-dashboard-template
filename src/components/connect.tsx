import {
  ConnectWrap,
  LED
} from './elements';

interface ConnectProps {}

const Connect: React.FC<ConnectProps> = () => {
  return (
    <ConnectWrap>
      <p>disconnected</p>
      <LED on="off" />
    </ConnectWrap>
  );
}

export default Connect;
