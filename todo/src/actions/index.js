import * as todos from '../constants/Todos'
import * as filter from '../constants/Filters'
import * as init from '../constants/Init'

// actions to preform on the individual todos
export const addTodo = text => ({ type: todos.ADD_TODO, text })
export const deleteTodo = id => ({ type: todos.DELETE_TODO, id })
export const editTodo = (id, text) => ({ type: todos.EDIT_TODO, id, text })
export const completeTodo = id => ({ type: todos.COMPLETE_TODO, id })

// these actions affect multiple todos
export const completeAll = () => ({ type: todos.COMPLETE_ALL })
export const clearCompleted = () => ({ type: todos.CLEAR_COMPLETED })

// switch the visibility filter
export const showAll = () => ({ type: filter.SHOW_ALL })
export const showCompleted = () => ({ type: filter.SHOW_COMPLETED })
export const showActive = () => ({ type: filter.SHOW_ACTIVE })

// set the initialized state
export const initialize = () => ({ type: init.INIT })
