import React, { PropTypes, Component } from 'react'
import TodoTextInput from './TodoTextInput'

export default class Header extends Component {
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
      <header className="todo-header">
        <h1>What are you going to do today?</h1>
        <h3>Let's get started</h3>
        <TodoTextInput newTodo
                       onSave={this.handleSave}
                       placeholder="//TODO" />
      </header>
    )
  }
}
