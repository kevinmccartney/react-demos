import React, { Component, PropTypes } from 'react'
import TodoCount from './TodoCount'
import Toolbar from './Toolbar'
import Filters from './Filters'
import TodoList from './TodoList'

export default class MainSection extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    filter: PropTypes.string.isRequired,
    init: PropTypes.bool.isRequired
  }

  renderMain() {
    const { init, todos, actions, filter } = this.props

    if(init && todos.length) {
      return(
        <section className="main">
          <TodoCount todos={todos}/>
          <Toolbar todos={todos} actions={actions} filter={filter}/>
          <Filters todos={todos}
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
