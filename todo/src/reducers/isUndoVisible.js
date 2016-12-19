import { UNDO_IS_VISIBLE, UNDO_IS_NOT_VISIBLE } from '../constants/UndoVisible'

const initialState = false

export default function isUndoVisible(isUndoVisible = initialState, action) {
  switch(action.type) {
    case UNDO_IS_VISIBLE:
      return true

    case UNDO_IS_NOT_VISIBLE:
      return false

    default:
      return isUndoVisible
  }
}
