import * as types from '../constants/UI'

const initialIsUndoVisible = false

export function isUndoVisible(isUndoVisible = initialIsUndoVisible, action) {
  switch(action.type) {
    case types.UNDO_IS_VISIBLE:
      return true

    case types.UNDO_IS_NOT_VISIBLE:
      return false

    default:
      return isUndoVisible
  }
}

const initialIsInitialized = false

export function isInitialized(isInit = initialIsInitialized, action) {
  switch(action.type) {
    case types.INIT:
      return true

    default:
      return isInit
  }
}

const initialViewFilter = types.SHOW_ALL

export function filterVisible(viewFilter = initialViewFilter, action) {
  switch(action.type) {
    case types.SHOW_ALL:
      return types.SHOW_ALL

    case types.SHOW_COMPLETED:
      return types.SHOW_COMPLETED

    case types.SHOW_ACTIVE:
      return types.SHOW_ACTIVE

    default:
      return viewFilter
  }
}
