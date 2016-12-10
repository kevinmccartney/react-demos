import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return(
      <nav className="todo-navbar navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="todo-logo navbar-brand" href="#">
              <h3>Todo App</h3>
            </a>
          </div>
        </div>
      </nav>
    )
  }
}
