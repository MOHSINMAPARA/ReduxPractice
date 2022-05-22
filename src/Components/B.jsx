import React from 'react'
import {  useSelector } from 'react-redux'
import { Data} from '../Redux/actions/action'

function B() {
    const prod = useSelector(state => state.reducerXYZ.prod)
    console.log(prod)
  return (
    <div>B</div>
  )
}

export default B