import React, { PropTypes, Component } from 'react'

export default class TodoToolbar extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }



  renderToggleAll() {
    const { todos, actions } = this.props
    const completedCount = todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    )

    if (todos.length > 0) {
      return (
        <input className="toggle-all"
               type="checkbox"
               checked={completedCount === todos.length}
               onChange={actions.completeAll} />
      )
    }
  }

  renderClearButton() {
    const { actions, todos } = this.props
    const completedCount = todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    )

    if (completedCount > 0) {
      return (
        <button className="clear-completed"
                onClick={actions.clearCompleted} >
          Clear completed
        </button>
      )
    }
  }

  render() {
    return (
      <div>
        Toggle all {this.renderToggleAll()}
        {this.renderClearButton()}
      </div>
    )
  }
}
