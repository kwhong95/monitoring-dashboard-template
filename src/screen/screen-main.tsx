import { 
  Container, 
  Header,
  CompanyName,
  AppName,
  Divider,
} from './screen-elements';

const ScreenMain: React.FC = () => {
  return (
    <Container>
      <Header>
        <CompanyName>(주)잉클</CompanyName>
        <Divider />
        <AppName>도장부스 모니터링</AppName>
      </Header>
    </Container>
  );
}

export default ScreenMain;