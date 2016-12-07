import React, { PropTypes, Component } from 'react'
import TodoTextInput from './TodoTextInput'

export default class AddTodo extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    isInitialized: PropTypes.bool.isRequired,
    init: PropTypes.func.isRequired
  }

  handleSave = text => this.props.addTodo(text)

  render() {
    const { init, isInitialized } = this.props

    return (
      <div className="add-todo-wrapper">
        <TodoTextInput newTodo
                       init={init}
                       isInitialized={isInitialized}
                       onSave={this.handleSave}
                       placeholder="//TODO" />
      </div>
    )
  }
}
