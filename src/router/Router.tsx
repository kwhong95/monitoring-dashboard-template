import { BrowserRouter, Switch, Route } from "react-router-dom";
import Container from "../layouts/Container";

/* Components */
import Main from "../components/Main";
import ScreenSaver from "../components/ScreenSaver";

const Router = () => {
  return (
    <BrowserRouter>
      <Container>
        <ScreenSaver />
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default Router;
