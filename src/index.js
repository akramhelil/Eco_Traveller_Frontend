import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createStore } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import reducer from './reducer'

const store = createStore(reducer)
console.log(store.getState())
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className='main-container'>
        <App />
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'))
