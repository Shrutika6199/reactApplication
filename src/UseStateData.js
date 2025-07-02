import React, { useState } from 'react'

const UseStateData = () => {
    //var name='Darshan';
    //console.log(useState());
    const [name,setName] = useState("Darshan");
    var changeName=()=>{
        console.log(name)
       setName("Lekha");
       // console.log(name)
    }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeName}>Changename</button>
    </div>
  )
}

export default UseStateData