import React, { Component } from 'react'

export default class Modals extends Component {
  render() {
    return(
      <div id="delete-todo-modal" className="modal fade bs-example-modal-sm" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modal title</h4>
            </div>
            <div className="modal-body">
              Delete Item
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary">Delete</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
