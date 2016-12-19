// as of now, we are just testing actions for the todos. I will most
// likely separate the actions into their own files

import * as actions from './todos'
import * as types from '../constants/Todos'

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('Test your actions!')).toEqual({
      type: types.ADD_TODO,
      text: 'Test your actions!'
    })
  })

  it('deleteTodo should create DELETE_TODO action', () => {
    expect(actions.deleteTodo(1)).toEqual({
      type: types.DELETE_TODO,
      id: 1
    })
  })

  it('editTodo should create a EDIT_TODO action', () => {
    expect(actions.editTodo(1, "New todo text")).toEqual({
      type: types.EDIT_TODO,
      id: 1,
      text: "New todo text"
    })
  })

  it("completeTodo should create a COMPLETE_TODO action", () => {
    expect(actions.completeTodo(1)).toEqual({
      type: types.COMPLETE_TODO,
      id: 1
    })
  })

  it('completeAll should create COMPLETE_ALL action', () => {
    expect(actions.completeAll()).toEqual({
      type: types.COMPLETE_All
    })
  })

  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('Test your actions!')).toEqual({
      type: types.ADD_TODO,
      text: 'Test your actions!'
    })
  })

})
