import React from 'react';
import ReactModal from 'react-modal';
import OrderFormModal from './OrderFormModal';
import text from './text';
import SwagList from './SwagList';
import shirt from './shirt.jpg';

const testItem = {
  image: shirt,
  caption: "Louisville DSA shirts, comfy and stylish. Sizes S-XXXL. $25",
};

const testItemList = [
  testItem,
  testItem,
  testItem,
  testItem,
  testItem,
]

class SwagShop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
  }

  openModal() {
    this.setState({
      modalOpen: true,
    });
  }
  render() {
    return(
      <div className="swag-shop">
      <div className="swag-shop-message">
      {text.swagShopMessage}
      </div>
      <SwagList items={testItemList} />
      <div className="open-order-modal" onClick={this.openModal.bind(this)}>
        GET SOME
      </div>
      <ReactModal isOpen={this.state.modalOpen}>
        <OrderFormModal />
      </ReactModal>
      </div>
    );
  }
}

export default SwagShop;
