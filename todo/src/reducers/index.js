import { combineReducers } from 'redux'
import undoable, { excludeAction } from 'redux-undo';
import todos from './todos'
import { isUndoVisible, isInitialized, filterVisible } from './ui'

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
  undoVisbility: isUndoVisible,
  isInitialized,
  filter: filterVisible
})

export default rootReducer
