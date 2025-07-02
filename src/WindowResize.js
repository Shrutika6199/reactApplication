import React, { useEffect, useState } from 'react'

const WindowResize = () => {
    const [size,setSize]=useState(window.innerWidth)
    useEffect(()=>{
        window.addEventListener('resize',checkSize);
        return()=>{
            window.removeEventListener('resize',checkSize)
        }
    },[size])
    const checkSize=()=>{
        setSize(window.innerWidth)
    }
  return (
    <div>
      <h1>{size}</h1>
    </div>
  )
}

export default WindowResize