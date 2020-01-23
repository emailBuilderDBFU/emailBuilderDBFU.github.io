import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './core/App';
import * as serviceWorker from './core/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
