import { useState, useEffect } from "react";
import { HashRouter, Switch } from "react-router-dom";
import Container from "../layouts/Container";

const Router = () => {
  const [current, setCurrent] = useState<string>("home");

  const setRoute = () => {
    const location = window.location.href.split("/");
    const pathname = location[location.length - 1];
    setCurrent(pathname ? pathname : "home");
  };

  useEffect(() => {
    window.addEventListener("hashchange", setRoute);

    return () => window.removeEventListener("hashchange", setRoute);
  }, []);

  return (
    <Container current={current}>
      <HashRouter>
        <Switch>
          {/* <Route /> */}
          {/* <Route /> */}
        </Switch>
      </HashRouter>
    </Container>
  );
};

export default Router;
