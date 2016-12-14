import { UNDO_IS_VISIBLE, UNDO_IS_NOT_VISIBLE } from '../constants/undoVisible'

const initialState = UNDO_IS_NOT_VISIBLE

export default function isUndoVisible(isUndoVisible = initialState, action) {
  switch(action.type) {
    case UNDO_IS_VISIBLE:
      return UNDO_IS_VISIBLE

    case UNDO_IS_NOT_VISIBLE:
      return UNDO_IS_NOT_VISIBLE

    default:
      return isUndoVisible
  }
}
