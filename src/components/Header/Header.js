import React from "react";
import { Link } from "react-router-dom";

// STYLE
import "./Header.scss";

// ASSETS
import { ReactComponent as Logo } from "../../assets/crown.svg";

// AUTH
import { signOut } from "../../firebase/firebase.utils";

const Header = ({ isSigned }) => {
  console.log(isSigned)
  const handleAuthStatus = () => {
    if (isSigned) {
      return <div className="option" onClick={signOut}>
        SIGN OUT
      </div>;
    }
    return <Link className="option" to="/signin">SIGN IN</Link>
  };

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
      </div>
    </div>
  );
};

export default Header;
