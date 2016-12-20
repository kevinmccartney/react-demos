import React, { Component, PropTypes } from 'react'

export default class Modals extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  }

  renderDeleteTodoModal = () => {
    return (
      <div id="delete-todo-modal" className="modal fade" data-backdrop="static" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Are you sure?</h4>
            </div>
            <div className="modal-body">
              Delete Item
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary" data-dismiss="modal">Delete</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return(
      <div>

        <div id="delete-completed-todos-modal" className="modal fade" data-backdrop="static" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Are you sure?</h4>
              </div>
              <div className="modal-body">
                Delete all completed items?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal">Delete All</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
