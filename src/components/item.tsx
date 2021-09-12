import { 
  ItemWrap, 
  Header,
  TitleWrap,
  Text,
  Unit,
  Payload
} from './elements';
import { IData } from '../state/mock-data';

const Item: React.FC<IData> = ({ title, payload, unit, Icon }) => {
  return (
    <ItemWrap>
      <Header>
        <TitleWrap>
          <Icon />
          <Text>{title}</Text>
        </TitleWrap>
        <Unit>{unit}</Unit>
      </Header>
      <Payload>{payload}</Payload>
    </ItemWrap>
  );
}

export default Item;