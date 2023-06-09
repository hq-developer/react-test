// import "../styles/styles.css";
import { Helmet } from "react-helmet-async";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "../styles/global-styles";

import { HomePage } from "./containers/HomePage/Loadable";
import { NotFoundPage } from "./containers/NotFoundPage/Loadable";

export default function App() {
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Company Analysis"
        defaultTitle="Company Analysis"
      >
        <meta name="description" content="Company Analysis application" />
      </Helmet>

      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
