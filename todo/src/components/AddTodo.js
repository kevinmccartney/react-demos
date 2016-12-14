import React, { PropTypes, Component } from 'react'
import TextField from './TextField'

export default class AddTodo extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    isInitialized: PropTypes.bool.isRequired,
    init: PropTypes.func.isRequired
  }

  handleSave = text => {
    const { isInitialized, init, addTodo } = this.props

    addTodo(text)

    if(!isInitialized) {
      init(true)
    }
  }

  render() {
    const { init, isInitialized } = this.props

    return (
      <div className="add-todo-wrapper">
        <TextField newTodo
                       init={init}
                       isInitialized={isInitialized}
                       onSave={this.handleSave}
                       handleSave={this.handleSave}
                       placeholder="//TODO" />
      </div>
    )
  }
}
