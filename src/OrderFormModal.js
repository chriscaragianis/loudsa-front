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
  bags: 0,
  boxes: 0,
  envs: 0,
  shippingTotal: 0,
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

  baseCost(order) {
    const { shirts, buttons, glasses, buttonPacks } = order;
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
  }

  shippingCost(order) {
    console.log(order)
    const boxes = Math.ceil(order.glasses / 4);
    let bags = order.shirts.length - boxes;
    if (bags < 0) bags = 0;
    let envs = Math.ceil(((order.buttonPacks * 8) + order.buttons.length) / 8) - boxes - (Math.ceil(bags / 2));
    if (envs < 0) envs = 0;
    const cost = (8 * boxes) + (4 * bags) + (2 * envs);
    order.boxes = boxes;
    order.bags = bags;
    order.envs = envs;
    order.shippingTotal= cost * 100;
    this.setState({ order });
    return cost * 100;
  }

  totalCost(order)  {
    return (this.shippingCost(order) + this.baseCost(order));
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
    next.total = this.totalCost(next);
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
    next.total = this.totalCost(next);
    this.setState({ order: next });
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
      console.log('valid msg')
      this.setState({ ok: true });
    }
  }

  render() {
    return (
        <div className="order-form-modal">
          <div className="closeX" onClick={this.props.closeModal}>
            X
          </div>
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
              closeModal={this.props.closeModal}
            />
          </div>
        </div>
    );
  }
};

export default OrderFormModal;
