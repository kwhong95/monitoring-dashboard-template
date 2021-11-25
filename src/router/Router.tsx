import { BrowserRouter, Switch, Route } from "react-router-dom";

/* Layouts */
import Container from "../layouts/Container";
import Navigation from "../layouts/Navigation";

/* Components */
import Main from "../components/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Container>
        <Navigation />
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default Router;
