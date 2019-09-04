import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// STYLE
import "./App.css";

// COMPONENTS
import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import Auth from "./pages/Auth/Auth";

// AUTH
import { auth } from './firebase/firebase.utils';

class App extends Component {

  state = {
    isSigned: null
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState(() => {
        return {
          isSigned: user
        }
      })
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header isSigned={this.state.isSigned} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={Auth} />
        </Switch>
      </div>
    );
  }
}

export default App;
