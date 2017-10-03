import React from 'react';
import ReactModal from 'react-modal';
import map from 'lodash/map';
import merge from 'lodash/merge';
import { shirtOptions, buttonOptions } from './merchOptions';

const shirtOptionTags = map(shirtOptions, (opt) => (
  <option value={opt.value}>{opt.label}</option>
));

const buttonOptionTags = map(buttonOptions, (opt) => (
  <option value={opt.value}>{opt.label}</option>
));

const OrderForm = (props) => {
  return (
    <div className="form-elements">
      <div className="form-element-name">shirts</div>
      <div className="form-element-group">
        <select id="shirts-input">
          <option value="NONE">Shirt size</option>
          {shirtOptionTags}
        </select>
        <button id="add-shirts" onClick={props.update} > Add Shirt </button>
        <button id="clear-shirts" onClick={props.clear} > Clear Shirts </button>
      </div>
      <div className="form-element-name">glasses</div>
      <div className="form-element-group">
        <input
          type='input'
          id="glasses-input"
          placeholder="Add glasses"
        />
        <button onClick={props.update} id="add-glasses" > Add Glasses </button>
        <button onClick={props.clear} id="clear-glasses" > Clear Glasses </button>
      </div>
      <div className="form-element-name">buttons</div>
      <div className="form-element-group">
        <select id="buttons-input">
          <option value="NONE">Button style</option>
          {buttonOptionTags}
        </select>
        <button onClick={props.update} id="add-buttons" > Add Button </button>
        <button onClick={props.clear} id="clear-buttons" > Clear Buttons </button>
      </div>
      <div className="form-element-name">button pax</div>
      <div className="form-element-group">
        <input
          type='text'
          id="buttonPacks-input"
          placeholder="Add button pax"
        />
        <button onClick={props.update} id="add-buttonPacks" > Add Button Pax </button>
        <button onClick={props.clear} id="clear-buttonPacks" > Clear Button Pax </button>
      </div>
    </div>
  );
};

export default OrderForm;
