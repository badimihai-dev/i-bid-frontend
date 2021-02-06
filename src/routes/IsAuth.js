import { Route } from "react-router-dom";
import { BrowserRoutes } from "../constants";
import { Home, Login, Register } from "../views";

const IsAuthRoutes = () => {
  return [
    <Route path={BrowserRoutes.Default.Home} component={Home} />,
    <Route path={BrowserRoutes.Default.Login} component={Login} />,
    <Route path={BrowserRoutes.Default.Register} component={Register} />,
  ];
};

export default IsAuthRoutes