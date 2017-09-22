import React from 'react';
import map from 'lodash/map';
import uniq from 'lodash/uniq';
import countBy from 'lodash/countBy';
import identity from 'lodash/identity';

const Item = (props) => (
  <div className="order-item">
    <div className="item-name">
      {props.item}
    </div>
    <div className="item-count">
      {props.count}
    </div>
  </div>
);

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
const StyleItemList = (props) => {
  console.log(props);
  const styles = uniq(props.styles);
  console.log('styles', styles)
  return map(styles, (style) => {
    const count = countBy(props.styles, identity);
    console.log('count', count)
    return (
      <Item item={`${props.name} ${style}`} count={count[style]} />
    );
  });
};

class OrderView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { shirts, buttons, glasses, buttonPacks } = this.props.order;
    return (
      <div>
        <div className="order-view-title">
          Order Total
        </div>
        <div>
          {StyleItemList({ styles: shirts, name: "Shirt"})}
          <Item count={glasses} item="Glasses" />
          {StyleItemList({ styles: buttons, name: "Button"})}
          <Item count={buttonPacks} item="Button Pax" />
        </div>
        <div className="order-total">
          <div>
            Donation:
          </div>
          <div>
            {totalCost(this.props.order)}
          </div>
        </div>
      </div>
    );
  }
}

export default OrderView;
