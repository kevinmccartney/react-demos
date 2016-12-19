import { combineReducers } from 'redux'
import undoable, { excludeAction } from 'redux-undo';
import todos from './todos'
import { isInit, todoFilter, undoVisibility } from './ui'

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
  undoVisibility,
  init: isInit,
  filter: todoFilter
})

export default rootReducer
