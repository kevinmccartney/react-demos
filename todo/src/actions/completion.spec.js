import * as actions from './completion'
import * as types from '../constants/Completion'

describe('todo actions', () => {
  it('completeAll should create COMPLETE_ALL action', () => {
    expect(actions.completeAll()).toEqual({
      type: types.COMPLETE_All
    })
  })

  // it('addTodo should create ADD_TODO action', () => {
  //   expect(actions.addTodo('Test your actions!')).toEqual({
  //     type: types.ADD_TODO,
  //     text: 'Test your actions!'
  //   })
  // })
})
