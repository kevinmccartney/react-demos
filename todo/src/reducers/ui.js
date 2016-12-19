import * as types from '../constants/UI'

const undoVisibilityValue = false

export function undoVisibility(undoVisibility = undoVisibilityValue, action) {
  switch(action.type) {
    case types.SHOW_UNDO:
      return true

    case types.HIDE_UNDO:
      return false

    default:
      return undoVisibility
  }
}

const initValue = false

export function isInit(init = initValue, action) {
  switch(action.type) {
    case types.INIT:
      return true

    default:
      return init
  }
}

const filterValue = types.SHOW_ALL

export function todoFilter(filter = filterValue, action) {
  switch(action.type) {
    case types.SHOW_ALL:
      return types.SHOW_ALL

    case types.SHOW_COMPLETED:
      return types.SHOW_COMPLETED

    case types.SHOW_ACTIVE:
      return types.SHOW_ACTIVE

    default:
      return filter
  }
}
