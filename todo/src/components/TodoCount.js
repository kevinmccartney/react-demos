import React, { PropTypes, Component } from 'react'

export default class TodoCount extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
  }

  renderTodoCount(completedCount) {
    const { todos } = this.props
    const activeCount= todos.length - completedCount
    const itemWord = activeCount === 1 ? 'thing' : 'things'

    return (
      <div className="todo-count panel panel-default">
        <div className="panel-body">
          You have <strong>{activeCount || 'No'}</strong> {itemWord} left to do
        </div>
      </div>
    )
  }

  render() {
    const { todos } = this.props
    const completedCount = todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    )

    return(
      <div>
        {this.renderTodoCount(completedCount)}
      </div>
    )
  }
}
