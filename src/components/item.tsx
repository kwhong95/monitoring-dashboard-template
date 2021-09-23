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
          <Icon 
            style={{
              position: "relative",
              top: "80px",
              left: "-80px",
              zIndex: 1,
            }}
            fill="#3d3d3d" 
            width="200" 
            height="150" 
          />
          <Text>{title}</Text>
        </TitleWrap>
        <Unit>{unit}</Unit>
      </Header>
      <Payload>{payload}</Payload>
    </ItemWrap>
  );
}

export default Item;