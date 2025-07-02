import React, { useContext } from 'react'
import { container } from './ShareCalc'

const Sub = () => {
  var {formData,dispatchData}=useContext(container);
  return (
    <div>
      <button onClick={()=>{dispatchData({type:"Sub",payload:formData}) }}>
        SUB
      </button>
      <h1>Data after Substraction :</h1>
    </div>
  )
}

export default Sub
