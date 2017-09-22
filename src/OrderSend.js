import React from 'react';
import SquarePaymentForm from 'react-square-hosted-fields';

class OrderSend extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SquarePaymentForm
          appId='sandbox-sq0idp-lLRC_irNJpIfCNKBE38zyg'
          onNonceGenerated={''}
        />
      </div>
    );
  }
};

export default OrderSend;
