import * as todos from '../constants/Todos'

// actions to preform on the individual todos
export const addTodo = text => ({ type: todos.ADD_TODO, text })
export const deleteTodo = id => ({ type: todos.DELETE_TODO, id })
export const editTodo = (id, text) => ({ type: todos.EDIT_TODO, id, text })
export const completeTodo = id => ({ type: todos.COMPLETE_TODO, id })

//
export const clearCompleted = () => ({ type: todos.CLEAR_COMPLETED })
export const completeAll = () => ({ type: todos.COMPLETE_ALL })
