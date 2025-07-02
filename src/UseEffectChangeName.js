import React, { useEffect, useState } from 'react'

const UseEffectChangeName = () => {
   var [initial,setInitial]=useState("Vishnu");
   var [name,setName]=useState("Geeta");
   var [mount,setMount]=useState(false);
    useEffect(()=>{
      if(mount===true)
        {alert("good evening");}
      else
      {setMount(false);}
    },[initial,mount]);
    
   
    var changeName=()=>{
        name="Sita";
        setName(name);
    }
    var changeInitial=()=>{
      setInitial("Daniel");
      setMount(true);
    }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeName}>CHANGE NAME</button>
      <h1>{initial}</h1>
      <button onClick={changeInitial}>change initial</button>
    </div>
  )
}

export default UseEffectChangeName