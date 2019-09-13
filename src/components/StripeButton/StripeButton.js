import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const stripePrice = price * 100;
  const publisherKey = 'pk_test_7Hut055bmAX0qS4acrTjic5200qXHCrjZu';

  const onToken = token => {
    alert("succesfuly paid");
  };

  return (
    <div>
      <StripeCheckout
        name="CRWN Clothing Ltd."
        label="Pay Now"
        amount={stripePrice}
        shippingAddress
        billingAddress
        token={onToken}
        image='https://svgshare.com/i/CUz.svg'
        panelLabel='Pay Now'
        stripeKey={publisherKey}
      />
    </div>
  );
};

export default StripeButton;
