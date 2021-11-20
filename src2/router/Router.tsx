import { useState, useEffect } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

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
    <div>
      {/* Nav - current setup */}
      <HashRouter>
        <Switch>
          {/* <Route /> */}
          {/* <Route /> */}
        </Switch>
      </HashRouter>
    </div>
  );
};

export default Router;
