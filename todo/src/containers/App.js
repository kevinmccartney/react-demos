import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TodoContext from '../components/TodoContext'
import * as Actions from '../actions'

const App = ({todos, actions, filter}) => (
  <div>
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <img alt="TodoApp" src="" />
          </a>
        </div>
      </div>
    </nav>
    <div className="container">
      <header>
        <h1>What are you going to do today?</h1>
        <h3>Lets get started</h3>
      </header>
      <TodoContext todos={todos} filter={filter} actions={actions} />
    </div>
  </div>
)

App.propTypes = {
  todos: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos,
  filter: state.filter
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
