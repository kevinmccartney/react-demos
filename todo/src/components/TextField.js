import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

export default class TextField extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    init: PropTypes.func.isRequired,
    isInitialized: PropTypes.bool.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
  }

  state = {
    text: this.props.text || ''
  }

  handleClickSubmission = e => {
    const { onSave } = this.props

    // grab the value of the input field
    const text = document.getElementById('todo-input').value.trim()
    // submit on enter keydown and if the input value is NOT an empty string
    if (!!text) {
      onSave(text)

      if (this.props.newTodo) {
        this.setState({ text: '' })
      }
    }
  }

  handleKeySubmission = e => {
    const { onSave } = this.props

    // grab the value of the input field
    const text = document.getElementById('todo-input').value.trim()
    // submit on enter keydown and if the input value is NOT an empty string
    if (e.which === 13 && !!text) {
      onSave(text)

      if (this.props.newTodo) {
        this.setState({ text: '' })
      }
    }
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  handleBlur = e => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value)
    }
  }

  render() {
    let submitButton

    if(this.props.newTodo) {
      submitButton = 'Add'
    } else if(this.props.editing) {
      submitButton = 'Save'
    }

    return (
      <form onSubmit={(e) => {
        e.preventDefault();
      }}>
        <div className="input-group">
          <input className={
            classnames({
              'editing-todo': this.props.editing,
              'new-todo': this.props.newTodo
            }, "form-control")}
            id="todo-input"
            type="text"
            placeholder={this.props.placeholder}
            autoFocus="true"
            value={this.state.text}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            onKeyDown={this.handleKeySubmission} />
            <span className="input-group-btn">
              <a className="btn btn-default"
                      onClick={this.handleClickSubmission}>
                {submitButton}
              </a>
            </span>
        </div>
      </form>
    )
  }
}
