import React from 'react'
import { render } from 'react-dom'
import { compose, createStore } from 'redux'
import persistState from 'redux-localstorage'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux'
import App from './containers/App'
import rootReducer from './reducers'

const enhancer = compose(
  composeWithDevTools(),
  persistState()
)

const store = createStore(rootReducer, enhancer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('todo-root')
)
