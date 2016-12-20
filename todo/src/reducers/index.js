import { combineReducers } from 'redux'
import todos from './todos'
import { isInit, todoFilter } from './ui'

const rootReducer = combineReducers({
  todos,
  init: isInit,
  filter: todoFilter
})

export default rootReducer
