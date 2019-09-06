import React from 'react';

// STYLE
import './CartDropdown.scss';

// COMPONENTS
import CustomButton from '../CustomButton/CustomButton';

const CartDropdown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"></div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
};

export default CartDropdown;