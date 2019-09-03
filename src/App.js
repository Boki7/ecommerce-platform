import React from "react";
import { Route, Switch } from "react-router-dom";

// STYLE
import "./App.css";

// COMPONENTS
import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import Auth from "./pages/Auth/Auth";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={Auth} />
      </Switch>
    </div>
  );
};

export default App;
