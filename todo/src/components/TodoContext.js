import React, { Component, PropTypes } from 'react'
import AddTodo from './AddTodo'
import TodoCount from './TodoCount'
import TodoFilters from './TodoFilters'
import TodoList from './TodoList'

export default class TodoContext extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    filter: PropTypes.string.isRequired
  }

  render() {
    const { todos, actions } = this.props
    const { filter } = this.props

    return (
       <section className="main">
         <AddTodo addTodo={actions.addTodo} />
         <TodoCount todos={this.props.todos}/>
         <TodoFilters todos={this.props.todos}
                      filter={String(this.props.filter)} />
          <TodoList todos={this.props.todos}
                    filter={String(this.props.filter)}
                    actions={this.props.actions} />
       </section>
    )
  }
}
