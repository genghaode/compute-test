import React, { Component } from 'react'
import { connect } from 'react-redux'
import Compute from '../components'

const compute = { type: 'compute'}
const input = { type: 'input'}
const RootApp = connect(
  (state) => {
    return {
      result: state.result
    }
  }, (dispatch) => {
    return {
      onResult: () => {
        return dispatch(compute)
      },
      onInput1: (e) => {
        return dispatch({type: 'input', val: e.target.value})
      },
      onInput2: (e) => {
        return dispatch({type: 'input2', val: e.target.value})
      },
      onSelect: (e) => {
        return dispatch({type: 'select', val: e.target.value})
      }    
    }
  }
)(Compute)

export default RootApp
