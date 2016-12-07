import React, { PropTypes, Component } from 'react'

export default class TodoToolbar extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    filter: PropTypes.string.isRequired
  }

  renderToggleAll(completedCount) {
    const { todos, actions } = this.props

    if (todos.length > 0) {
      return (
        <div>
          <input className="toggle-all"
                 type="checkbox"
                 checked={completedCount === todos.length}
                 onChange={actions.completeAll} /> Toggle all
        </div>
      )
    }
  }

  renderClearButton(completedCount) {
    const { actions, filter } = this.props

    if (completedCount > 0 && filter === "SHOW_ALL" || filter === "SHOW_COMPLETED") {
      return (
        <button className="clear-completed"
                onClick={actions.clearCompleted} >
          Clear completed
        </button>
      )
    }
  }

  render() {
    const { todos } = this.props
    const completedCount = todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    )

    return (
      <div>
        {this.renderToggleAll(completedCount)}
        {this.renderClearButton(completedCount)}
      </div>
    )
  }
}
