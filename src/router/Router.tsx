import { useState, useEffect, useRef } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Container from "../layouts/Container";
import ScreenSaver from "../components/ScreenSaver";
import { useScreenSaverState } from "../contexts/ScreenSaverContext";

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
      <ScreenSaver />
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