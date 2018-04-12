import React from 'react';
import ReactDOM from 'react-dom';
import WebSearchBox from './common/WebSearchBox';
import './index.css';

import Colors from './common/colors'
import ColorListItem from './common/ColorListItem'

const ColorSearchBox = WebSearchBox(ColorListItem);

ReactDOM.render(
    <ColorSearchBox searchStore={new Colors()}/>,
    document.getElementById('root')
);
