import { combineReducers } from 'redux'
import undoable, { excludeAction } from 'redux-undo';
import todos from './todos'
import filter from './filter'
import isInitialized from './isInitialized'
import isUndoVisible from './isUndoVisible'

import { ADD_TODO, EDIT_TODO, COMPLETE_TODO } from '../constants/Todos'

const rootReducer = combineReducers({
  todos: undoable(todos,
    {
      limit: 1,
      filter: excludeAction([
        ADD_TODO,
        COMPLETE_TODO,
        EDIT_TODO
      ]),
    }
  ),
  filter,
  isInitialized,
  isUndoVisible
})

export default rootReducer
