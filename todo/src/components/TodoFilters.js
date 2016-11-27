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

  // handleView = filter => {
  //   this.setState(this.props.filter)
  // }

  static filteredTodos = todos.filter(TODO_FILTERS[filter])
  static completedCount = todos.reduce((count, todo) =>
    todo.completed ? count + 1 : count,
    0
  )

  renderTodoFilter(completedCount) {
    const { todos } = this.props
    const { filter } = this.props.state
    const activeCount = todos.length - completedCount

    // if (todos.length) {
    //   return (
    //     <TodoFilters filter={filter} {...actions} />
    //   )
    // }
  }

  // renderFilterLink(filter) {
  //   // const title = FILTER_TITLES[filter]
  //   const { filter: selectedFilter, onShow } = this.props
  //
  //   return (
  //     <a className={classnames({ selected: filter === selectedFilter })}
  //        style={{ cursor: 'pointer' }}
  //        onClick={() => onShow(filter)}>
  //       {title}
  //     </a>
  //   )
  // }

  renderClearButton() {
    const { completedCount, onClearCompleted } = this.props
    if (completedCount > 0) {
      return (
        <button className="clear-completed"
                onClick={onClearCompleted} >
          Clear completed
        </button>
      )
    }
  }

  render() {
    // return (
    //   <footer className="footer">
    //     // <ul className="filters">
    //     //   // {[ SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED ].map(filter =>
    //     //   //   <li key={filter}>
    //     //   //     {this.renderFilterLink(filter)}
    //     //   //   </li>
    //     //   // )}
    //     // </ul>
    //     {this.renderClearButton()}
    //   </footer>
    // )
    return (
      <div></div>
    )
  }
}
