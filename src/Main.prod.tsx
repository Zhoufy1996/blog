import React from 'react';
import ReactDom from 'react-dom';
import App from './app/App';

const render = () => {
    ReactDom.render(<App />, document.getElementById('root'));
};

render();
