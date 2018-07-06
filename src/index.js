import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

function createStore () {
    //The store should have 4 parts
    // 1. The state
    // 2. Get the state
    // 3. Listen to changes
    // 4. Update state

    let state

    const getState = () => state

    return {
        getState
    }
}
