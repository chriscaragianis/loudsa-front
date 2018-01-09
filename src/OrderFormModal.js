import React from 'react';
import OrderForm from './OrderForm';
import OrderView from './OrderView';
import OrderSend from './OrderSend';
import merge from 'lodash/merge';
import includes from 'lodash/includes';
import cloneDeep from 'lodash/cloneDeep';
import { valid } from './formHelpers';

const initialOrder = {
  shirts: [],
  buttons: [],
  glasses: 0,
  buttonPacks: 0,
  total: 0,
};

const totalCost = (order) => {
  const {
    shirts, buttons, glasses, buttonPacks,
  } = order;
  let total = 0;
  total += 12 * buttonPacks;
  if (glasses < 2) {
    total += 8 * glasses;
  } else if (glasses < 4) {
    total += 7.5 * glasses;
  } else {
    total += 6.25 * glasses;
  }
  total += 20 * shirts.length;
  total += 2 * buttons.length;
  return total * 100;
};

class OrderFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: cloneDeep(initialOrder),
      cost: 0,
      info: {
        name: '',
        street: '',
        city: '',
        zip: '',
        email: '',
        message: '',
      },
      ok: false,
    };
  }

  updateOrder(e) {
    const key = e.target.id.split('-')[1];
    const next = cloneDeep(this.state.order);
    if (includes(['shirts', 'buttons'], key)) {
      const val = document.getElementById(`${key}-input`).value;
      if (val !== 'NONE') {
        next[key].push(val);
      }
    } else {
      const val = document.getElementById(`${key}-input`).value;
      next[key] = parseInt(val);
    }
    next.total = totalCost(next);
    this.setState({ order: cloneDeep(next) });
  }

  clear(e) {
    const next = cloneDeep(this.state.order);
    const key = e.target.id.split('-')[1];
    if (includes(['shirts', 'buttons'], key)) {
      next[key] = [];
    } else {
      next[key] = 0;
    }
    this.setState({ order: next, cost: totalCost(next) });
  }

  onSend() {
    const message = {
      name: document.getElementById('name').value,
      street: document.getElementById('street').value,
      city: document.getElementById('city').value,
      state: document.getElementById('state').value,
      zip: document.getElementById('zip').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
      order: this.state.order,
    };
    // validate then set ok
    if (valid(message)) {
      console.log('valid msg');
      this.setState({ ok: true });
    }
  }

  render() {
    return (
      <div className="order-form-modal">
        <div className="order-form">
          <OrderForm
            update={this.updateOrder.bind(this)}
            clear={this.clear.bind(this)}
          />
        </div>
        <div className="order-view">
          <OrderView
            order={this.state.order}
          />
        </div>
        <div className="order-send">
          <OrderSend
            ok={this.state.ok}
            total={this.state.total}
            onSend={this.onSend.bind(this)}
            order={this.state.order}
          />
        </div>
      </div>
    );
  }
}

export default OrderFormModal;
