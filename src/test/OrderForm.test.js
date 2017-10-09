import React from 'react';
import Adapter from 'enzyme-adapter-react-15';
import {Form, Text, Select} from 'react-form';
import Enzyme, { shallow, mount, render } from 'enzyme';
import map from 'lodash/map';
import OrderForm from '../OrderForm';
import { makeUpdate } from '../OrderFormModal';

const initialState = {
  kazoos: 4,
  shoes: ['med', 'med', 'lg'],
};

test('makeUpdate extra info does not mutate state', () => {
  expect(makeUpdate({ drums: 10 }, initialState)).toEqual(initialState);
});

test('makeUpdate no item info does not mutate state', () => {
  expect(makeUpdate({ shoes: [], kazoos: 0 }, initialState)).toEqual(initialState);
});

test('makeUpdate adds to a total', () => {
  expect(makeUpdate({ shoes: [], kazoos: 1 }, initialState)).toEqual({
    kazoos: 5,
    shoes: ['med', 'med', 'lg'],
  });
});

test('makeUpdate adds to a list', () => {
  expect(makeUpdate({ shoes: ['med'], kazoos: 0 }, initialState)).toEqual({
    kazoos: 5,
    shoes: ['med', 'med', 'lg', 'med'],
  });
});

