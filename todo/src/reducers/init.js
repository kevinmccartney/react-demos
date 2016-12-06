import { INIT, NO_INIT } from '../constants/Initialized'

const initialState = NO_INIT

export default function init(isInit = initialState, action) {
  switch(action.type) {
    case INIT:
      return INIT

    case NO_INIT:
      return NO_INIT

    default:
      return isInit
  }
}
