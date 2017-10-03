import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
import OrderForm from '../OrderForm';
import '../dev.css';

storiesOf('OrderForm', module)
  .add('empty form', () => (
    <OrderForm />
  ));

