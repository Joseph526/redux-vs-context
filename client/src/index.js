import React from 'react';
import ReactDOM from 'react-dom';
import Provider from './providers';
import Consumer from './consumer';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider>
        <Consumer>
            <App />
        </Consumer>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
