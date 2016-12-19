import React from 'react'
import { connect } from 'react-redux'
import { ActionCreators as UndoActionCreators } from 'redux-undo'

let UndoButton = ({ onUndo, undoVisbility }) => {
  // if(isUndoVisible) {
    return(
      <div>
        <button onClick={onUndo}>Undo</button>
      </div>
    )
  // }
  // else {
  //   return( <div></div> )
  // }
}

const mapStateToProps = state => ({
  undoVisbility: state.undoVisbility,
})

const mapDispatchToProps = (dispatch) => {
  return {
    onUndo: () => dispatch(UndoActionCreators.undo())
  }
}

UndoButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoButton)

export default UndoButton
