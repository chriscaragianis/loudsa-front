import React from 'react';
import ReactModal from 'react-modal';
import {Form, Text, Select} from 'react-form';

const shirtOptions = [
  {
    label: 'Small',
    value: 'Small',
  },
  {
    label: 'Medium',
    value: 'Medium',
  },
  {
    label: 'Large',
    value: 'Large',
  },
  {
    label: 'X-Large',
    value: 'X-Large',
  },
  {
    label: 'XX-Large',
    value: 'XX-Large',
  },
  {
    label: 'XXX-Large',
    value: 'XXX-Large',
  },
];

const buttonOptions = [
  {
    label: 'Marx',
    value: 'Marx',
  },
  {
    label: 'Rosa',
    value: 'Rosa',
  },
  {
    label: 'Queer Solidarity',
    value: 'Queer Solidarity',
  },
  {
    label: 'Logo',
    value: 'Logo',
  },
  {
    label: 'Bread and Roses',
    value: 'Bread and Roses',
  },
  {
    label: 'Transgender Pride Flag',
    value: 'Transgender Pride Flag',
  },
  {
    label: 'FALGSC',
    value: 'FALGSC',
  },
  {
    label: 'Rainbow Logo',
    value: 'Rainbow Logo',
  },
];

class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shirts: [],
      glasses: 0,
      buttons: [],
      buttonPacks: 0,
    }
  }

  addShirt() {
    const shirts = this.state.shirts;
    const size = document.getElementById('size').value;
    shirts.push(shirtOptions[size - 1].label);
    this.setState({
      shirts,
    }, this.props.update({ shirts }));
  }
  addButton() {
    const buttons = this.state.buttons;
    const design = document.getElementById('design').value;
    buttons.push(buttonOptions[design - 1].label);
    this.setState({
      buttons,
    }, this.props.update({ buttons }));
  }
  addGlasses() {
    let glasses = this.state.glasses;
    const count = parseInt(document.getElementById('glasses').value);
    glasses += count;
    console.log(glasses)
    this.setState({
      glasses,
    },  this.props.update({ glasses }));
  }
  addButtonPacks() {
    let buttonPacks = this.state.buttonPacks;
    const count = parseInt(document.getElementById('buttonPacks').value);
    buttonPacks += count;
    this.setState({
      buttonPacks,
    }, this.props.update({ buttonPacks }));
  }

  render() {
    return (
      <div>
      <Form onSubmit={this.sendMail}>
        <div>
          <h4>Shirt</h4>
          <Select
            field="shirtSelect"
            id="size"
            options={shirtOptions}
          />
          <button onClick={this.addShirt.bind(this)}>Add Shirt</button>
          <button onClick={() => this.setState({ shirts: [] })}>
            Clear Shirts
          </button>
          <h4>Glasses</h4>
          <Text field="glasses" id="glasses"/>
          <button onClick={this.addGlasses.bind(this)}>Add Glasses</button>
          <button onClick={() => this.setState({ glasses: 0 })}>
            Clear Glasses
          </button>
          <h4>Buttons</h4>
          <Select
            field="buttonSelect"
            id="design"
            options={buttonOptions}
          />
          <button onClick={this.addButton.bind(this)}>AddButton</button>
          <button onClick={() => this.setState({ buttons: [] })}>
            Clear Buttons
          </button>
          <h4>Button Pax</h4>
          <Text field="buttonPacks" id="buttonPacks"/>
          <button onClick={this.addButtonPacks.bind(this)}>Add Button Pax</button>
          <button onClick={() => this.setState({ buttonPacks: 0 })}>
            Clear Button Pax
          </button>
        </div>
      </Form>
      </div>
    );
  }
}
;
export default OrderForm;
