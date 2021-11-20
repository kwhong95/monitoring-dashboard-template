import { Route,Switch } from 'react-router';
import ButtonList from '../components/button-list';
import Detail from '../components/detail';
import {
  Container,
  Header,
  CompanyName,
  AppName,
} from './screen-elements';
 import Connect from "../components/connect";


const ScreenMain: React.FC = () => {
  return (
    <Container>
      <Header>
        <CompanyName>(주)잉클</CompanyName>
        <AppName>도장부스 모니터링</AppName>
        <Connect connected={false} width={100} />
      </Header>
      <Switch>
        <Route exact path="/" component={ButtonList} />
        <Route path="/:id" component={Detail} />
      </Switch>
    </Container>
  );
}

export default ScreenMain;
