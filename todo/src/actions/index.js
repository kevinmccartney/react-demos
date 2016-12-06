import * as types from '../constants/ActionTypes'
import * as visibility from '../constants/TodoFilters'
import * as init from '../constants/Initialize'

// todo actions
export const addTodo = text => ({ type: types.ADD_TODO, text })
export const deleteTodo = id => ({ type: types.DELETE_TODO, id })
export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text })
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id })
export const completeAll = () => ({ type: types.COMPLETE_ALL })
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })

// visibility actions
export const showAll = () => ({ type: visibility.SHOW_ALL })
export const showCompleted = () => ({ type: visibility.SHOW_COMPLETED })
export const showActive = () => ({ type: visibility.SHOW_ACTIVE })

// initialized action
export const initialize = () => ({ type: init.INIT })
