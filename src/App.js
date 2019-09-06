import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// ACTIONS
import { setCurrentUser } from "./redux/user/user.actions";

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
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        setCurrentUser(user)
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<Auth />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  }
}

export default connect(
  mapStateToProps,
  {
    setCurrentUser
  }
)(App);
