import React from 'react';
import _ from 'lodash';

const getItems = (props) => {
  const { items } = props;
  return _.map(items, (x) => (
    <div className="swag-item">
      <img src={x.image} />
      {x.caption}
    </div>
  ));
};

const SwagList = (props) => (
  <div className="swag-list">
    {getItems(props)}
  </div>
);

export default SwagList;
