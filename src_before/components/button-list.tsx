import { MockData } from '../state/mock-data';
import Button from './button';
import { ButtonListWrap } from './elements';

const ButtonList: React.FC = () => {

  return (
    <ButtonListWrap>
      {MockData.map((item, idx) =>
      <Button
        key={idx}
        title={item.title}
        Icon={item.Icon}
        to={`/${item.id}`}
      />)}
    </ButtonListWrap>
  );
}

export default ButtonList;
