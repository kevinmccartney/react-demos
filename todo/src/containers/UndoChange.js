import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators as UndoActionCreators } from 'redux-undo'

let UndoButton = ({ undoAction, hideUndo, undoVisibility }) => {
  if(undoVisibility) {
    return(
      <div>
        <button onClick={undoAction}>Undo</button>
        <button onClick={() => hideUndo()} />
      </div>
    )
  }
  else {
    return( <div></div> )
  }
}

const undoAction = () => UndoActionCreators.undo()

const mapStateToProps = state => ({
  undoVisibility: state.undoVisibility
})

const mapDispatchToProps = (dispatch) => ({
  undoAction: bindActionCreators(undoAction, dispatch)
})

UndoButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoButton)

export default UndoButton
