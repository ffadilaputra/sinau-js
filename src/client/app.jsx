import 'babel-polyfill';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import dogReducer from './reducers/dog-reducer';
import BarkMessage from './containers/bark-message';
import BarkButton from './containers/bark-button';
import Dog from '../shared/dog';

const browserTOby = new Dog('Browser TOby').bark();
const store = createStore(combineReducers({
  dog: dogReducer,
}));

const App = props => (
  <div>
    The Dog Says: {props.message}
  </div>
);

App.propTypes = {
  message: PropTypes.string.isRequired,
};

ReactDOM.render(<App message={browserTOby} />, document.querySelector('.app'));
ReactDOM.render(<Provider store={store}><div><BarkMessage/><BarkButton/></div></Provider>, document.querySelector('.app'));
