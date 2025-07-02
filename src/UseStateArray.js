import React, { useState } from 'react'

const UseStateArray = () => {
    var names=["marry","hema","Hussain","kumar","dev"];
    var [fnames,setfname]=useState(names);
    //console.log(fname);
  return (
    <div>
      {fnames.map((fname)=>{
        return (
            <h1 key={fname}>{fname}</h1>
        )
      })}
    </div>
  )
}

export default UseStateArray