import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              <img alt="TodoApp" src="" />
            </a>
          </div>
        </div>
      </nav>
    )
  }
}