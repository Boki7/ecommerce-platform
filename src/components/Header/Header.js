import React from "react";
import { connect } from "react-redux";

// REDUX SELECTORS
import { selectCurrentUser } from "../../redux/user/user.selectors";

// STYLED COMPONENTS
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionContainer
} from "./Header.styles";

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
        <OptionContainer as="div" onClick={signOut}>
          SIGN OUT
        </OptionContainer>
      );
    }
    return <OptionContainer to="/signin">SIGN IN</OptionContainer>;
  };

  const handleToggleCart = () => {
    return cartHidden ? null : <CartDropdown />;
  };

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionContainer to="/shop">SHOP</OptionContainer>
        <OptionContainer to="/contact">CONTACT</OptionContainer>
        {handleAuthStatus()}
        <CartIcon />
      </OptionsContainer>
      {handleToggleCart()}
    </HeaderContainer>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: selectCurrentUser(state),
    cartHidden: state.cart.hidden
  };
};

export default connect(mapStateToProps)(Header);
