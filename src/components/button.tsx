import { ButtonWrap, Text } from './elements';

interface ButtonProps {
  onClick ?: () => void;
  title: string;
  Icon: any;
  to: string;
}

const Button: React.FC<ButtonProps> = ({ title, Icon, to }) => {
  return (
    <ButtonWrap to={to}>
      <Icon fill="#fff" width="50" height="50" />
      <Text>
        {title}
      </Text>
    </ButtonWrap>
  );
}

export default Button;