import React, { PropTypes, Component } from 'react'
import TodoTextInput from './TodoTextInput'

export default class AddTodo extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleSave = text => {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <div className="add-todo-wrapper">
        <TodoTextInput newTodo
                       onSave={this.handleSave}
                       placeholder="//TODO" />
      </div>
    )
  }
}
