import React from 'react';
import ReactDOM from 'react-dom';
import path from 'path';
import "../public/styles.css";
import App from './components/App';

ReactDOM.render(<App restaurantId={path.basename(document.URL)} />, document.getElementById('reviews_component'));
