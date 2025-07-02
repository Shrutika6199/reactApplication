import React, { useContext } from 'react'
import { container } from './ShareCalc'


const Add = () => {
    var {formData,dispatchData}=useContext(container);
  return (
    <div>
      <button onClick={()=>{dispatchData({type:"ADD",payload:formData}) }}>
        Add
      </button>
      <h1>Data after Addition :</h1>
    </div>
  )
}

export default Add
