import * as filter from '../constants/Filters'
import * as initialized from '../constants/Init'

export * from './todos'

// switch the visibility filter
export const showAll = () => ({ type: filter.SHOW_ALL })
export const showCompleted = () => ({ type: filter.SHOW_COMPLETED })
export const showActive = () => ({ type: filter.SHOW_ACTIVE })

// set the initialized state
export const init = value => ({ type: initialized.INIT, value })
