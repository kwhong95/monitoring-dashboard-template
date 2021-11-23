import { Container } from "../styles/ItemStyles";

const ItemList: React.FC = () => {
  return (
    <Container>
      <div className="item">
        <p>Title</p>
        <p>Payload</p>
      </div>
      <div className="item">2</div>
      <div className="item">3</div>
      <div className="item">4</div>
    </Container>
  );
};

export default ItemList;
