import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import * as TodoActions from '../actions'

const App = ({todos, actions}) => (
  <div className="container">
    <header>
      <h1>What are you going to do today?</h1>
      <h3>Lets get started</h3>
    </header>
    <TodoList todos={todos} actions={actions} />
  </div>
)

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
