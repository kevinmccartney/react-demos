import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import CallToAction from '../components/CallToAction'
import AddTodo from '../components/AddTodo'
import TodoMain from '../components/TodoMain'

const App = ({todos, actions, filter, init}) => (
  <div className="todoRoot">
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
      <CallToAction todos={todos} init={init} />
      <AddTodo addTodo={actions.addTodo} init={init} initialize={actions.initialize}/>
      <TodoMain todos={todos} filter={filter} actions={actions} init={init} />
    </div>
  </div>
)

App.propTypes = {
  todos: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  init: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos,
  filter: state.filter,
  init: state.init
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
