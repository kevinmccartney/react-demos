// as of now, we are just testing actions for the todos. I will most
// likely separate the actions into their own files

import * as actions from './index'

describe('todo actions', () =>{
  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('Test your actions!')).toEqual({
      type: 'ADD_TODO',
      text: 'Test your actions!'
    })
  })

})
