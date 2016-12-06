import { combineReducers } from 'redux'
import todos from './todos'
import filter from './filter'
import init from './init'

const rootReducer = combineReducers({
  todos,
  filter,
  init
})

export default rootReducer
