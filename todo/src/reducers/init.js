import { INIT, NO_INIT } from '../constants/Initialize'

const initialState = NO_INIT

export default function init(isInit = initialState, action) {
  switch(action.type) {
    case INIT:
      return INIT

    default:
      return isInit
  }
}
