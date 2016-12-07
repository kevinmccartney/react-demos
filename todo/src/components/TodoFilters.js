import React, { PropTypes, Component } from 'react'
import classnames from 'classnames'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/Filters'

export default class TodoFilters extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    filter: PropTypes.string.isRequired
  }

  renderFilterLink(filter) {
    const { actions } = this.props

    const FILTER_TITLES = {
      [SHOW_ALL]: 'All',
      [SHOW_ACTIVE]: 'Active',
      [SHOW_COMPLETED]: 'Completed'
    }

    const FILTER_ACTIONS = {
      [SHOW_ALL]: actions.showAll,
      [SHOW_ACTIVE]: actions.showActive,
      [SHOW_COMPLETED]: actions.showCompleted
    }

    const title = FILTER_TITLES[filter]
    const action = FILTER_ACTIONS[filter]
    const { filter: selectedFilter } = this.props

    return (
      <a className={classnames({ selected: filter === selectedFilter })}
         onClick={action}>
        {title}
      </a>
    )
  }

  render() {
    return (
      <div>
        <ul className="filters">
          {[ SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED ].map(filter =>
            <li key={filter}>
              {this.renderFilterLink(filter)}
            </li>
          )}
        </ul>
      </div>
    )
  }
}
