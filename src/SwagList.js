import React from 'react';
import _ from 'lodash';

class SwagList extends React.Component {

  constructor(props) {
    super(props);
  }

  getItems() {
    const items = this.props.items;
    return _.map(items, (x) => (
      <div className="swag-item">
        <img src={x.image} />
        {x.caption}
      </div>
    ));
  }
  render() {
    return(
      <div className="swag-list">
        {this.getItems()}
      </div>
    );
  }
}

export default SwagList;
