import { ButtonWrap, Text } from './elements';

interface ButtonProps {
  onClick ?: () => void;
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <ButtonWrap onClick={onClick}>
      <Text>
        {title}
      </Text>
    </ButtonWrap>
  );
}

export default Button;