import React, { useState } from 'react'

const UseStateCounter = () => {
    var [count,setCount]=useState(0);
    //console.log(count);
    var increase=()=>{
        count=count+1;
        setCount(count);
    }
    var decrease=()=>{
        count=count-1;
        setCount(count);
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>Add</button>
      <button onClick={decrease}>Sub</button>
    </div>
  )
}

export default UseStateCounter