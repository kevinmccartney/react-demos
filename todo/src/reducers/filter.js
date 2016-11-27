import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

const initialState = SHOW_ALL

export default function filterVisible(viewFilter = initialState, action) {
  switch(action.type) {
    case SHOW_ALL:
      return SHOW_ALL

    case SHOW_COMPLETED:
      return SHOW_COMPLETED

    case SHOW_ACTIVE:
      return SHOW_ACTIVE

    default:
      return viewFilter
  }
}
