import { combineReducers } from 'redux'
import todos from './todos'
import filter from './filter'
import isInitialized from './isInitialized'

const rootReducer = combineReducers({
  todos,
  filter,
  isInitialized
})

export default rootReducer
