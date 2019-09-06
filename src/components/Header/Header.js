import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

// STYLE
import "./Header.scss";

// ASSETS
import { ReactComponent as Logo } from "../../assets/crown.svg";

// AUTH
import { signOut } from "../../firebase/firebase.utils";


// COMPONENTS
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";


const Header = ({ currentUser, cartHidden }) => {
  const handleAuthStatus = () => {
    if (currentUser) {
      return (
        <div className="option" onClick={signOut}>
          SIGN OUT
        </div>
      );
    }
    return (
      <Link className="option" to="/signin">
        SIGN IN
      </Link>
    );
  };

  const handleToggleCart = () => {
      return cartHidden ? null : <CartDropdown />
  }

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {handleAuthStatus()}
        <CartIcon />
      </div>
      {handleToggleCart()}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    cartHidden: state.cart.hidden
  }
}

export default connect(mapStateToProps)(Header);
