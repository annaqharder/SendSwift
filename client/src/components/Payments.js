import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends Component {
  render() {
    const KEY = process.env.REACT_APP_STRIPE_KEY;

    return (
      <StripeCheckout
        name="SendSwift"
        description="$5 for 5 email credits"
        // give me $5 in USD
        amount={500}
        // expects a callback function w/ token from Stripe API
        token={(token) => this.props.handleToken(token)}
        stripeKey={KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
