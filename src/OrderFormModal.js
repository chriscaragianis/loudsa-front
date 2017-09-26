import React from 'react';
import OrderForm from './OrderForm';
import OrderView from './OrderView';
import OrderSend from './OrderSend';
import merge from 'lodash/merge';

class OrderFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {
        shirts: [],
        buttons: [],
        glasses: 0,
        buttonPacks: 0,
        total: 0,
      },
    };
  }

  update(upd) {
    const order = merge(this.state.order, upd)
    this.setState({ order });
  }

  render() {
    return (
        <div className="order-form-modal">
          <div className="order-form">
            <OrderForm
              update={this.update.bind(this)}
            />
          </div>
          <div className="order-view">
            <OrderView
              order={this.state.order}
              update={this.update.bind(this)}
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
