import React, { useRef } from 'react'

const UseRefHook = () => {
    var divContainer=useRef(null);
    var h1Container=useRef(null);
    console.log(divContainer);
    var changeDiv=()=>{
        console.log(divContainer);
        divContainer.current.style.backgroundColor="red";
        divContainer.current.style.border="2px solid black"
    }
    var changeH1=()=>{
        h1Container.current.style.color="orange";
        h1Container.current.innerText="changed the content";
    }
  return (
    <div ref={divContainer} onClick={changeDiv}>
      <h1 ref={h1Container} onClick={changeH1}>welcome to useRef hook</h1>
    </div>
  )
}

export default UseRefHook