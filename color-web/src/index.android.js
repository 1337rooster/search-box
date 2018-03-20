import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Root           from './app/native/containers/Root';
import configureStore from './app/store/configureStore.prod.js';

import React from 'react';
import ReactDOM from 'react-dom';
import WebSearchBox from './WebSearchBox';
import './index.css';

import Colors from './colors'
import ColorListItem from './ColorListItem'

const ColorSearchBox = WebSearchBox(ColorListItem);

class ReactNativeelloWorld extends Component {

  render() {
    return (
      <ColorSearchBox searchStore={new Colors()}/>
    );
  }
}

AppRegistry.registerComponent('ReactNativeWebHelloWorld', () => ReactNativeelloWorld);