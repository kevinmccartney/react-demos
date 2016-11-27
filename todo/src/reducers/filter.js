import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

const initialState = [
  SHOW_ALL
]

export default function filterVisible(state = initialState, action) {
  return true
}
