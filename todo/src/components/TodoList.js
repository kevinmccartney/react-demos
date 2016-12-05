import React, { Component, PropTypes } from 'react'
import TodoItem from './TodoItem'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

export default class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
  }

  render() {
    const { todos, actions, filter } = this.props

    const filteredTodos = todos.filter(TODO_FILTERS[filter])

    return (
      <ul className="todo-list">
        {filteredTodos.map(todo =>
          <TodoItem key={todo.id} todo={todo} {...actions} />
        )}
      </ul>
    )
  }
}
