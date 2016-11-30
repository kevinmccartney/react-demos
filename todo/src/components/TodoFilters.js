import React, { PropTypes, Component } from 'react'
import classnames from 'classnames'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

export default class TodoFilters extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
  }

  static TODO_FILTERS = {
    [SHOW_ALL]: () => true,
    [SHOW_ACTIVE]: todo => !todo.completed,
    [SHOW_COMPLETED]: todo => todo.completed
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

    const completedCount = todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    )
    const activeCount = todos.length - completedCount
    // const filteredTodos = todos.filter(this.TODO_FILTERS[filter])

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
