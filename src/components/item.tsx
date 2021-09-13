import { 
  ItemWrap, 
  Header,
  TitleWrap,
  Text,
  Unit,
  Payload
} from './elements';

interface ItemProps {
  title: string;
  payload: number;
  unit: string;
  Icon: any;
}

const Item: React.FC<ItemProps> = ({ title, payload, unit, Icon }) => {
  return (
    <ItemWrap>
      <Header>
        <TitleWrap>
          <Icon fill="#fff" width="30" height="30" />
          <Text>{title}</Text>
        </TitleWrap>
        <Unit>{unit}</Unit>
      </Header>
      <Payload>{payload}</Payload>
    </ItemWrap>
  );
}

export default Item;