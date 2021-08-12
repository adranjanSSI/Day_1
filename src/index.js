import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
//

//action
const increament=()=>{
  return {
    type:"INCREAMENT"
  }
}
const decreament=()=>{
  return {
    type:"DECREAMENT"
  }
}
const counter=(state=0,action)=>{
  switch(action.type){
    case "INCREAMENT": 
      return state+1
    case "DECREAMENT": return state-1
  }
}
let store=createStore(counter);
store.subscribe(()=>console.log(store.getState()));
store.dispatch(increament());
store.dispatch(increament());
store.dispatch(increament());
store.dispatch(increament());
store.dispatch(increament());
store.dispatch(decreament());
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


