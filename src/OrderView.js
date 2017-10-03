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

const OrderView = (props) => {
  const { shirts, buttons, glasses, buttonPacks } = props.order;
  return (
    <div>
      <div className="form-element-name">
        Order Total
      </div>
      <div>
        {StyleItemList({ styles: shirts, name: "Shirt"})}
        <Item count={glasses} item="Glasses" />
        {StyleItemList({ styles: buttons, name: "Button"})}
        <Item count={buttonPacks} item="Button Pax" />
      </div>
      <div className="form-element-name-small">
        <div>
          Donation:
        </div>
        <div>
          {props.cost}
        </div>
      </div>
    </div>
  );
}

export default OrderView;
