import { ButtonWrap, ButtonText } from './elements';

interface ButtonProps {
  onClick ?: () => void;
  title: string;
  Icon: any;
  to: string;
}

const Button: React.FC<ButtonProps> = ({ title, Icon, to }) => {
  return (
    <ButtonWrap to={to}>
      <Icon fill="#c2c2c2" width="80" height="80" />
      <ButtonText>
        {title}
      </ButtonText>
    </ButtonWrap>
  );
}

export default Button;