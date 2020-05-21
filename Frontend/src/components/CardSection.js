import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import './StripeCardStyles.css';

const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const CardSection = () => {
      return (
          <label>
              Card Details
              <CardElement options={CARD_ELEMENT_OPTIONS} />
          </label>
      );
  };

  export default CardSection;