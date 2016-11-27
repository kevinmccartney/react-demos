import React, { Component, PropTypes } from 'react'
import AddTodo from './AddTodo'
import TodoCount from './TodoCount'
import TodoFilters from './TodoFilters'
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
    actions: PropTypes.object.isRequired,
    filter: PropTypes.string.isRequired
  }

  handleClearCompleted = () => {
    this.props.actions.clearCompleted()
  }

  renderToggleAll(completedCount) {
    const { todos, actions } = this.props
    if (todos.length > 0) {
      return (
        <input className="toggle-all"
               type="checkbox"
               checked={completedCount === todos.length}
               onChange={actions.completeAll} />
      )
    }
  }

  render() {
    const { todos, actions } = this.props
    const { filter } = this.props

    const filteredTodos = todos.filter(TODO_FILTERS[filter])
    const completedCount = todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    )

    return (
      <section className="main">
        <AddTodo addTodo={actions.addTodo} />
        <TodoFilters todos={this.props.todos}
                     filter={String(this.props.filter)}
                     actions={this.props.actions}/>
        {this.renderToggleAll(completedCount)}
        <ul className="todo-list">
          {filteredTodos.map(todo =>
            <TodoItem key={todo.id} todo={todo} {...actions} />
          )}
        </ul>
      </section>
    )
  }
}
