import React from 'react';
import SquarePaymentForm from 'react-square-hosted-fields';

class OrderSend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'CBASEP7mCQnQPITME9OOFQTfjTEgAQ',
    };
  }

  chargeCard(nonce, cardData) {
    // wait for ok
    fetch('https://api.dsalouisville.org/api/v1/charge',
      {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: this.props.total,
          card_nonce: nonce,
          location_id: this.state.location,
          message: {
            name: document.getElementById('name').value,
            street: document.getElementById('street').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            zip: document.getElementById('zip').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
          },
          order: this.props.order,
        }),
      })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.resp.status_code === 200) {
          alert('Success!');
          this.props.closeModal();
        } else alert('Error processing, please check info and try again');
      });
  }


  render() {
    return (
      <div>
        Name
        <div className="form-element-group">
          <input id="name" type="text" />
        </div>
        Street
        <div className="form-element-group">
          <input id="street" type="text" />
        </div>
        City
        <div className="form-element-group">
          <input id="city" type="text" />
        </div>
        <div>
        State
        <div className="form-element-group">
          <input id="state" type="text" />
        </div>
        Zip
        <div className="form-element-group">
          <input id="zip" type="text" />
        </div>
        email
        <div className="form-element-group">
          <input id="email" type="text" />
        </div>
        Message
        <div className="form-element-group">
          <input id="message" type="text" />
        </div>
          <SquarePaymentForm
            appId='sandbox-sq0idp-lLRC_irNJpIfCNKBE38zyg'
            onNonceGenerated={this.chargeCard.bind(this)}
            onNonceError={() => {alert('Error processing payment, please check info and try again')}}
          />
        </div>
      </div>
    );
  }
};

export default OrderSend;
