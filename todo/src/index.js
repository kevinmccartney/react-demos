import React from 'react'
import { render } from 'react-dom'
import { compose, createStore, applyMiddleware } from 'redux'
import persistState from 'redux-localstorage'
import { composeWithDevTools } from 'redux-devtools-extension';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux'
import multi from 'redux-multi'
import App from './containers/App'
import rootReducer from './reducers'

const enhancer = compose(
  composeWithDevTools(),
  persistState(),
  applyMiddleware(multi, createLogger())
)

const store = createStore(rootReducer, enhancer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('todo-root')
)
