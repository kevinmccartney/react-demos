import React, { Component, PropTypes } from 'react'
import TodoCount from './TodoCount'
import TodoToolbar from './TodoToolbar'
import TodoFilters from './TodoFilters'
import TodoList from './TodoList'

export default class TodoMain extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    filter: PropTypes.string.isRequired,
    isInitialized: PropTypes.bool.isRequired
  }

  renderMain() {
    const { isInitialized, todos, actions, filter } = this.props

    if(isInitialized && todos.length) {
      return(
        <section className="main">
          <TodoCount todos={todos}/>
          <TodoToolbar todos={todos} actions={actions} filter={filter}/>
          <TodoFilters todos={todos}
                       filter={filter}
                       actions={actions} />
           <TodoList todos={todos}
                     filter={filter}
                     actions={actions} />
        </section>
      )
    }
    return(
      <section className="main"></section>
    )
  }

  render() {

    return (
      <div>
        {this.renderMain()}
      </div>
    )
  }
}
