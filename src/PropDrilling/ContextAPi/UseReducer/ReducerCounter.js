import React, { useReducer, useState } from 'react'

const ReducerCounter = () => {
    // const [count,setCount] =useState(0);
    // console.log(useReducer());//func,data
    const reducer=(count,action)=>{
        console.log(count,"COUNT")
        console.log(action,"ACTION")
    
    switch(action.type)
        {
        case "ADD":return count+parseInt(action.payload);
        case "SUB":return count-parseInt(action.payload);
        case "MUL":return count*parseInt(action.payload);
        default:return 0;
        }
    }
    const [count,dispatchCount]=useReducer(reducer,0)
    const [text,setText]=useState('');
  return (
    <div>
      <h1>{count}</h1>
      <form>
        <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
      </form>
      <button onClick={()=>{dispatchCount({type:"ADD",payload:text})}}>+</button>
      <button onClick={()=>{dispatchCount({type:"SUB",payload:text})}}>-</button>
      <button onClick={()=>{dispatchCount({type:"XYZ"})}}>REFRESH</button>
       <button onClick={()=>{dispatchCount({type:"MUL",payload:text})}}>*</button>
    </div>
  )
}

export default ReducerCounter