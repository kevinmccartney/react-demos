import { INIT, NO_INIT } from '../constants/Init'

const initialState = NO_INIT

export default function isInitialized(isInit = initialState, action) {
  switch(action.type) {
    case INIT:
      return INIT

    default:
      return isInit
  }
}
