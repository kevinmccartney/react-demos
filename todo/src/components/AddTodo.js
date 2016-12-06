import React, { PropTypes, Component } from 'react'
import TodoTextInput from './TodoTextInput'

export default class AddTodo extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    initialize: PropTypes.func.isRequired,
    init: PropTypes.bool.isRequired
  }

  handleSave = text => this.props.addTodo(text)
  func = () => "hello"

  render() {
    const { init, initialize } = this.props

    return (
      <div className="add-todo-wrapper">
        <TodoTextInput newTodo
                       init={init}
                       initialize={initialize}
                       onSave={this.handleSave}
                       placeholder="//TODO" />
      </div>
    )
  }
}
