import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateMachineProvider, createStore } from 'little-state-machine'
// import { todoList } from './toDoStates.js/toDoStates'
// import { DevTool } from 'little-state-machine-devtools'
//initial State


createStore(
  {
    yourDetail: {
      name: ''
    },
    todoList: [],
    filter: 'Show All'
  },
  {
    name: "NameStore",
    middleWares: [log],
    storageType: localStorage  // by default it is session storage.
  }
)

function log(store) {
  console.log("action has been called", store)
}

ReactDOM.render(
  <React.StrictMode>
    <StateMachineProvider>
      {/* {process.env.NODE_ENV !== 'production' && <DevTool />} */}
      <App />
    </StateMachineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
