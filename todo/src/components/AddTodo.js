import React, { PropTypes, Component } from 'react'
import TextField from './TextField'

export default class AddTodo extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    init: PropTypes.bool.isRequired,
    initialize: PropTypes.func.isRequired
  }

  handleSave = text => {
    const { init, initialize, addTodo } = this.props

    addTodo(text)

    if(!init) {
      initialize(true)
    }
  }

  render() {

    return (
      <div className="add-todo-wrapper">
        <TextField newTodo
                       onSave={this.handleSave}
                       handleSave={this.handleSave}
                       placeholder="//TODO" />
      </div>
    )
  }
}
