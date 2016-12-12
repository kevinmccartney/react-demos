import React from 'react'
import { connect } from 'react-redux'
import { ActionCreators as UndoActionCreators } from 'redux-undo'

let UndoButton = ({ onUndo }) => (
  <div>
    <button onClick={onUndo}>Undo</button>
  </div>
)

const mapDispatchToProps = (dispatch) => {
  return {
    onUndo: () => dispatch(UndoActionCreators.undo())
  }
}

UndoButton = connect(
  mapDispatchToProps
)(UndoButton)

export default UndoButton
