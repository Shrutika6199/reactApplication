import React, { createContext, useReducer, useState } from 'react'
import SimpleCalc from './SimpleCalc'
import ComplexCalc from './ComplexCalc'
export const container=createContext();
const ShareCalc = () => {
    const Reducer=(data,action)=>{
        switch(action.type)
        {
            case "ADD":data=parseInt(action.payload)+1
            return data;
            case "Sub":data=parseInt(action.payload)-1
            return data;
            case "Square":data=parseInt(action.payload)*parseInt(action.payload)
            return data;
            case "Cube":data=parseInt(action.payload)*parseInt(action.payload)*parseInt(action.payload)
            return data;
            default:return 0;
        }
    }
    const [formData,setFormData]=useState('');
    const handlesubmit=(event)=>{
        event.preventDefault();
        if(!formData){
           alert("enter a number") 
        }
    }
    const [data,dispatchData]=useReducer(Reducer,0);
  return (
    <div>
        <form onSubmit={handlesubmit}>
            <input type='text' name='formData' value={formData} 
            onChange={(event)=>{setFormData(event.target.value)}}/>
            <button>SUBMIT</button>
        </form>
        <container.provider value={{formData,dispatchData}}>
            <SimpleCalc/>
            <ComplexCalc/>
        </container.provider>
        <h1>{data}</h1>
    </div>
  )
}

export default ShareCalc
