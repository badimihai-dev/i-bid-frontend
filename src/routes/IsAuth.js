import { Route } from "react-router-dom";
import { BrowserRoutes } from "../constants";
import { AdsPage } from "../views";

const IsAuthRoutes = () => {
  return [
    <Route path={BrowserRoutes.Auth.Home} component={AdsPage} />,
  ];
};

export default IsAuthRoutes