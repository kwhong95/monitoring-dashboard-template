import { ButtonWrap, Text, Icon } from './elements';

interface ButtonProps {
  onClick ?: () => void;
  title: string;
  Icon: any;
}

const Button: React.FC<ButtonProps> = ({ title, onClick, Icon }) => {
  return (
    <ButtonWrap onClick={onClick}>
      <Icon fill="#fff" width="50" height="50" />
      <Text>
        {title}
      </Text>
    </ButtonWrap>
  );
}

export default Button;