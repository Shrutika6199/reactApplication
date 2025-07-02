import React, { useState } from 'react'

const Display = () => {
    var [data,setData]=useState(0);
    return(
        <>
        {data===0?<Demoone/>:<Demotwo/>}
        </>
    )
  
}
const Demoone=()=>{
    return(
        <h1>value is 0</h1>
    )
}
const Demotwo=()=>{
    return(
        <h1>value is not  0</h1>
    )
}
export default Display