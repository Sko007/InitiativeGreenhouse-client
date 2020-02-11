import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import superagent from "superagent";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const StripeCheckoutButton = ({ price }) => {
  const dispatch = useDispatch();
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_mKasr2YS99gdnWrPeTPTiKvc00eXp6Sd3K";
  const baseUrl = "http://localhost:4000";

  const onToken = token => {
    console.log("Payment was successful");

    superagent
      .post(`${baseUrl}/payment`)
      .send({
        amount: priceForStripe,
        token
      })
      .then(result => {
        console.log("check result", result);
        dispatch({ type: "PAYMENT", payload: result });
      })
      .catch(error => console.log("Payment error:", error));
  };

  return (
    <StripeCheckout
      label="Support the Enviornment now"
      name="Initiative-Greenhouse"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Support the Enviornment now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
