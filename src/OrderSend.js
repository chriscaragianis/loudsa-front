import React from 'react';
import SquarePaymentForm from 'react-square-hosted-fields';

const validate = (msg) => {
  const { name, street, city, state, zip, email, message } = msg;
  if (!name) return 'Don\'t forget your name, please!';
  if (!street) return 'Need a street address or PO box!';
  if (!city) return 'What city are we sending this to?';
  if (!zip.match(/[0-9]{5}/)) return 'Zip code should be 5 digits';
  if (!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) return 'Please enter a valid email.';
  return 'ok';
};

class OrderSend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '65BT0A9DMMN0E',
    };
  }

  chargeCard(nonce, cardData) {
    // wait for ok
    fetch(
      'https://api.dsalouisville.org/api/v1/charge',
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
      },
    )
      .then((res) => console.log(res));
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
            appId='sq0idp-lLRC_irNJpIfCNKBE38zyg'
            onNonceGenerated={this.chargeCard.bind(this)}
            onNonceError={() => {alert('Error processing payment, please check info and try again')}}
          />
        </div>
      </div>
    );
  }
}

export default OrderSend;
