import React, { Component, PropTypes } from 'react'
import TodoCount from './TodoCount'
import TodoToolbar from './TodoToolbar'
import TodoFilters from './TodoFilters'
import TodoList from './TodoList'

export default class TodoMain extends Component {
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
         <TodoCount todos={todos}/>
         <TodoToolbar todos={todos} actions={actions} />
         <TodoFilters todos={todos}
                      filter={filter}
                      actions={actions} />
          <TodoList todos={todos}
                    filter={filter}
                    actions={actions} />
       </section>
    )
  }
}