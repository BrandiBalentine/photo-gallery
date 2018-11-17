import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Slider from './components/slider';
import WebFont from 'webfontloader';
import * as serviceWorker from './serviceWorker';

WebFont.load({
    google: {
      families: ['Open Sans:300,400,600,700', 'sans-serif']
    }
});

ReactDOM.render(
    <main>
        <h1>Photo Gallery</h1>
        <Slider />
    </main>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
