import React from 'react';
import text from './text';
import SwagList from './SwagList';

const testItem = {
  image: "https://lorempixel.com/225/275",
  caption: "this is the caption",
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
  }

  render() {
    return(
      <div className="swag-shop">
        <div className="swag-shop-message">
          {text.swagShopMessage}
        </div>
        <SwagList items={testItemList} />
        <TemplateBarf bad={
          `sd;lfki
          lskjlkjs;aslk} />
      </div>
    );
  }
}

export default SwagShop;
