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
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends Component {
  state = {
    isSigned: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(snapshot => {
          this.setState(() => {
            return {
              isSigned: {
                id: snapshot.id,
                ...snapshot.data()
              }
            };
          });
        });
      } else {
        this.setState(() => {
          return {
            isSigned: null
          };
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <h1>{this.state.isSigned ? this.state.isSigned.displayName : null}</h1>
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
