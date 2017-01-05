import React, { Component } from 'react'
import { connect } from 'react-redux'
import Compute from '../components'
import store from '../redux/store'
const RootApp = connect(
  (state) => {
    return {
      result: state.result
    }
  }, (dispatch) => {
    return {
      onResult: () => {

        const state = store.getState()

        return dispatch({ type: 'compute'})
      },
      onInput1: (e) => {
        return dispatch({type: 'val1', val: e.target.value})
      },
      onInput2: (e) => {
        return dispatch({type: 'val2', val: e.target.value})
      },
      onSelect: (e) => {
        return dispatch({type: 'selVal', val: e.target.value})
      }    
    }
  }
)(Compute)

export default RootApp
