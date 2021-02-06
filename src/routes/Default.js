import { Route } from "react-router-dom";
import { BrowserRoutes } from "../constants";
import { Home, Login, Register } from "../views";

const DefaultRoutes = () => {
  return [
    <Route exact path={BrowserRoutes.Default.Home} component={Home} />,
    <Route exact path={BrowserRoutes.Default.Login} component={Login} />,
    <Route exact path={BrowserRoutes.Default.Register} component={Register} />,
  ];
};

export default DefaultRoutes;
