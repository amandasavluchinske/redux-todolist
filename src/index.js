import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// {
//     type: 'ADD_TODO',
//     todo: {
//       id: 0,
//       name: 'Learn Redux',
//       complete: false,
//     }
//   }
  
//   {
//     type: 'REMOVE_TODO',
//     id: 0,
//   }
  
//   {
//     type: 'TOGGLE_TODO',
//     id: 0,
//   }
  
//   {
//     type: 'ADD_GOAL',
//     goal: {
//       id: 0,
//       name: 'Run a Marathon'
//     }
//   }
  
//   {
//     type: 'REMOVE_GOAL',
//     id: 0
//   }


function todos (state = [], action) {
    switch(action.type) {
        case 'ADD_TODO' :
            return state.concat([action.todo])
        case 'REMOVE_TODO' :
            return state.filter((todo) => todo.id !== action.id)
        case 'TOGGLE_TODO' :
            return state.map((todo) => todo.id !== action.id ? todo :
            Object.assign({}, todo, {complete: !todo.complete})
            )
        default :
            return state
    }
}

function createStore (reducer) {
    //The store should have 4 parts
    // 1. The state
    // 2. Get the state (getState)
    // 3. Listen to changes (subscribe)
    // 4. Update state (dispatch)

    let state
    let listeners = []

    const getState = () => state

    const subscribe = (listener) => {
        listeners.push(listener)
        return () => {
            listeners = listeners.filter((l) => l !== listener)
        }
    }

    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
        // loop over listeners and invoke them
    }

    return {
        getState,
        subscribe,
    }
}

const store = createStore()
store.dispatch()

store.subscribe(() => {

})
