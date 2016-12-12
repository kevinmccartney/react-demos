import { combineReducers } from 'redux'
import undoable, { excludeAction } from 'redux-undo';
import todos from './todos'
import filter from './filter'
import isInitialized from './isInitialized'
import { ADD_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL } from '../constants/Todos'

const rootReducer = combineReducers({
  todos: undoable(todos,
    {
      filter: excludeAction([
        EDIT_TODO,
        ADD_TODO,
        COMPLETE_TODO,
        COMPLETE_ALL
      ]),
    }
  ),
  filter,
  isInitialized
})

export default rootReducer
