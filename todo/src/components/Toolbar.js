import React, { PropTypes, Component } from 'react'

export default class Toolbar extends Component {
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
    const { filter } = this.props

    if (completedCount > 0 && (filter === "SHOW_ALL" || filter === "SHOW_COMPLETED")) {
      return (
        <div>
          <button type="button"
                  className="clear-completed-btn"
                  data-toggle="modal"
                  data-target="#delete-completed-todos-modal">
            Clear completed
          </button>
        </div>
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
