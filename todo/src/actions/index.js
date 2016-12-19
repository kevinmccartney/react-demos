import * as filter from '../constants/Filters'
import * as initialized from '../constants/Init'

export * from './todos'

// these actions affect multiple todos
// export const completeAll = () => ({ type: todos.COMPLETE_ALL })
// export const clearCompleted = () => ({ type: todos.CLEAR_COMPLETED })

// switch the visibility filter
export const showAll = () => ({ type: filter.SHOW_ALL })
export const showCompleted = () => ({ type: filter.SHOW_COMPLETED })
export const showActive = () => ({ type: filter.SHOW_ACTIVE })

// set the initialized state
export const init = value => ({ type: initialized.INIT, value })
