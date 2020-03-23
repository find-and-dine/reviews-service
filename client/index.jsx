import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import path from 'path';

ReactDOM.render(<App restaurantId={path.basename(document.URL)} />, document.getElementById('app'));