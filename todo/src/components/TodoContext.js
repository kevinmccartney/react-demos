import React, { Component, PropTypes } from 'react'
import AddTodo from './AddTodo'
import TodoCount from './TodoCount'
import TodoFilters from './TodoFilters'
import TodoItem from './TodoItem'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

export default class TodoContext extends Component {
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

    return (
       <section className="main">
         <AddTodo addTodo={actions.addTodo} />
         <TodoCount todos={this.props.todos}/>
         <TodoFilters todos={this.props.todos}
                      filter={String(this.props.filter)}
                      actions={this.props.actions} />
       </section>
    )
  }
}
