// as of now, we are just testing actions for the todos. I will most
// likely separate the actions into their own files

import * as actions from './ui'
import * as types from '../constants/UI'

describe('test', () => {
  it('showAll should create SHOW_ALL action', () => {
    expect(actions.showAll()).toEqual({
      type: types.SHOW_ALL
    })
  })

  it('showCompleted should create SHOW_COMPLETED action', () => {
    expect(actions.showCompleted()).toEqual({
      type: types.SHOW_COMPLETED
    })
  })

  it('showAll should create SHOW_ACTIVE action', () => {
    expect(actions.showActive()).toEqual({
      type: types.SHOW_ACTIVE
    })
  })

  it('init should create INIT action', () => {
    expect(actions.init()).toEqual({
      type: types.INIT
    })
  })

  it('showUndo should create UNDO_IS_VISIBLE action', () => {
    expect(actions.showUndo()).toEqual({
      type: types.UNDO_IS_VISIBLE
    })
  })

  it('hideUndo should create UNDO_IS_NOT_VISIBLE action', () => {
    expect(actions.hideUndo()).toEqual({
      type: types.UNDO_IS_NOT_VISIBLE
    })
  })

})
