import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import Header from '../components/Header'
import CallToAction from '../components/CallToAction'
import AddTodo from '../components/AddTodo'
import MainSection from '../components/MainSection'

const App = ({todos, actions, filter, isInitialized}) => (
  <div className="todo-app">
    <Header />
    <div className="container">
      <CallToAction todos={todos} isInitialized={isInitialized} />
      <AddTodo addTodo={actions.addTodo} init={actions.init} isInitialized={isInitialized}/>
      <MainSection todos={todos} filter={filter} actions={actions} isInitialized={isInitialized} />
    </div>
  </div>
)

App.propTypes = {
  todos: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  isInitialized: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos,
  filter: state.filter,
  isInitialized: state.isInitialized
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
