import { MockData } from '../state/mock-data';
import { ItemListWrap } from './elements';
import Item from './item';

const ItemList: React.FC = () => {
  return(
    <ItemListWrap>
      {MockData.map((item, idx) =>
       <Item 
        key={idx} 
        title={item.title}
        payload={item.payload}
        unit={item.unit} 
       />)}
    </ItemListWrap>
  );
}

export default ItemList;