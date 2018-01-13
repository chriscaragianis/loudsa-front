import React from 'react';
import ReactModal from 'react-modal';
import text from './text';
import SwagList from './SwagList';
import SwagMessage from './SwagMessage';
import shirtjpg from './shirt.jpg';
import glassesjpg from './glasses.jpg';
import marxjpg from './marx.jpg';
import rosajpg from './rosa.jpg';
import queersolidarityjpg from './queersolidarity.jpg';
import transjpg from './trans.jpg';
import rainbowjpg from './rainbow.jpg';
import socilismjpg from './socilism.jpg';
import logojpg from './logo.jpg';
import breadjpg from './bread.jpg';
import falgscjpg from './falgsc.jpg';
import buttonPaxjpg from './buttonPax.jpg';

const shirt = {
  image: shirtjpg,
  caption: "Louisville DSA shirts, comfy and stylish. Sizes S-XXXL. $20",
};

const falgsc= {
  image: falgscjpg,
  caption: "Fully Automated Luxury Gay Space Communism button $2"
};

const buttonPax = {
  image: buttonPaxjpg,
  caption: "Button Pax: One each of all eight button designs. $12",
};

const glasses= {
  image: glassesjpg,
  caption: "\"Old Fashioned Socialism\" tumbler. $8 for 1, $15 for two, $25 for four.",
};

const marx = {
  image: marxjpg,
  caption: "Marx head Louisville DSA button $2",
};

const rosa = {
  image: rosajpg,
  caption: "Rosa's Poem button $2",
};

const queersolidarity = {
  image: queersolidarityjpg,
  caption: "Queer Solidarity DSA button $2",
};

const trans = {
  image: transjpg,
  caption: "Trans Flag w/Rose button $2",
};

const rainbow = {
  image: rainbowjpg,
  caption: "Louisville DSA Rainbow Logo button $2",
};

const socilism = {
  image: socilismjpg,
  caption: "Ultra Rare Limited Edition \"Socilism\" Guy button, commemorating the first public meeting of Louisville DSA $500"
};

const logo = {
  image: logojpg,
  caption: "Louisville DSA Logo button $2",
};

const bread = {
  image: breadjpg,
  caption: "Bread and Roses Louisville DSA button $2",
};

const testItemList = [
  shirt,
  glasses,
  marx,
  queersolidarity,
  rosa,
  falgsc,
  trans,
  rainbow,
  socilism,
  logo,
  bread,
  buttonPax,
]

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


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

  closeModal() {
    this.setState({
      modalOpen: false,
    });
  }

  render() {
    return(
      <div className="swag-shop">
        <SwagMessage />
        <div className="open-order-modal" onClick={this.openModal.bind(this)}>
          {' --> GET SOME <-- '}
        </div>
        <SwagList items={testItemList} />
        <ReactModal
          isOpen={this.state.modalOpen}
          styles={customStyles}
        >
        </ReactModal>
      </div>
    );
  }
}

export default SwagShop;
