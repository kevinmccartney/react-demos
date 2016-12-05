import React, { PropTypes, Component } from 'react'
import classnames from 'classnames'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

export default class TodoFilters extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired
  }

  renderFilterLink(filter) {
    const FILTER_TITLES = {
      [SHOW_ALL]: 'All',
      [SHOW_ACTIVE]: 'Active',
      [SHOW_COMPLETED]: 'Completed'
    }

    const title = FILTER_TITLES[filter]
    const { filter: selectedFilter } = this.props

    return (
      <a className={classnames({ selected: filter === selectedFilter })}>
        {title}
      </a>
    )
  }

  render() {
    const { filter, todos } = this.props

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
