import React, { Component, PropTypes } from 'react'

export default class CallToAction extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    init: PropTypes.bool.isRequired
  }

  renderCTA() {
    const { todos, init } = this.props

    if(init) {
      if(todos.length) {
        return(
          <h3>Remember to take a break too ;)</h3>
        )
      }
      return(
        <h1>All done, congratulations!</h1>
      )
    }

    return(
        <div>
          <h1>What are you going to do today?</h1>
          <h3>Lets get started</h3>
        </div>
      )
  }

  render() {
    return(
      <div>{this.renderCTA()}</div>
    )
  }
}
