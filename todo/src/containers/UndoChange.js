import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { ActionCreators as UndoActionCreators } from 'redux-undo'

let UndoButton = ({ onUndo, isUndoVisible }) => {
  if(isUndoVisible) {
    return(
      <div>
        <button onClick={onUndo}>Undo</button>
      </div>
    )
  } else {
    return( <div></div> )
  }
}

UndoButton.propTypes = {
  isUndoVisible: PropTypes.bool.isRequired,
  onUndo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  isUndoVisible: state.isUndoVisible,
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
