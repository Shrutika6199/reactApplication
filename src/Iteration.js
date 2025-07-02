import React from 'react'
var names=["iisha","dev","Disha","Mikey","Scott"];
const Iteration = () => {
  return (
    <div>
      {/* {names[0]}
      {names[1]}
      {names[2]} */}
      {names.map((name)=>{
        return <h1 key={name}>{name}</h1>
      })}
    </div>
  )
}

export default Iteration