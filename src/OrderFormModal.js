import React from 'react';
import OrderForm from './OrderForm';
import OrderView from './OrderView';
import OrderSend from './OrderSend';
import merge from 'lodash/merge';
import includes from 'lodash/includes';
import cloneDeep from 'lodash/cloneDeep';

const initialOrder = {
  shirts: [],
  buttons: [],
  glasses: 0,
  buttonPacks: 0,
  total: 0,
};

const totalCost = (order) => {
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
  return total;
}

class OrderFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: cloneDeep(initialOrder),
      cost: 0,
    };
  }

  update(e) {
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
    const cost = totalCost(next);
    this.setState({ order: cloneDeep(next), cost });
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

  render() {
    return (
        <div className="order-form-modal">
          <div className="order-form">
            <OrderForm
              update={this.update.bind(this)}
              clear={this.clear.bind(this)}
            />
          </div>
          <div className="order-view">
            <OrderView
              order={this.state.order}
              cost={this.state.cost}
            />
          </div>
          <div className="order-send">
            <OrderSend
              total={this.state.total}
            />
          </div>
        </div>
    );
  }
};

export default OrderFormModal;
