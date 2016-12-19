import * as ui from '../constants/UI'

// switch the visibility filter
export const showAll = () => ({ type: ui.SHOW_ALL })
export const showCompleted = () => ({ type: ui.SHOW_COMPLETED })
export const showActive = () => ({ type: ui.SHOW_ACTIVE })

// set the initialized state
export const initialize = value => ({ type: ui.INIT, value })

// show or hide the undo button
export const showUndo = () => ({ type: ui.SHOW_UNDO })
export const hideUndo = () => ({ type: ui.HIDE_UNDO })
