import React from 'react';
import SquarePaymentForm from 'react-square-hosted-fields';

class OrderSend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '65BT0A9DMMN0E',
    };
  }

  chargeCard(nonce, cardData) {
    fetch('http://localhost:4000/api/v1/charge',
      {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: this.props.total,
          card_nonce: nonce,
          location_id: this.state.location,
        }),
      })
      .then((res) => res.json())
      .then((res) => console.log(res))
  }


  render() {
    return (
      <div>
        <SquarePaymentForm
          appId='sq0idp-lLRC_irNJpIfCNKBE38zyg'
          onNonceGenerated={this.chargeCard.bind(this)}
        />
      </div>
    );
  }
};

export default OrderSend;
