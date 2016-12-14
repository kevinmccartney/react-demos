import { INIT } from '../constants/Init'

const initialState = false

export default function isInitialized(isInit = initialState, action) {
  switch(action.type) {
    case INIT:
      return true

    default:
      return isInit
  }
}
