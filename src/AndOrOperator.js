import React from 'react'

const AndOrOperator = () => {
    var word="welcome";
  return (
    <div>
      <h1>if left side data is vald,left side data is printed.If the left side data is invalid,it prints right side data</h1>
      <h1>{"welocme"||"Hello"}</h1>
      <h1>{""||"Hello2"}</h1>
      <h1>{0||"Hello3"}</h1>
       <h1>{1||"Hello4"}</h1>
        <h1>{true||"Hello5"}</h1>
        <h1>{false||"Hello6"}</h1>
        <h1>{0||0}</h1>

        <h1>if left side data is vald,right side data is printed.If the left side data is invalid,it prints left side data</h1>
      <h1>{"welocme"&&"Hello"}</h1>
      <h1>{""&&"Hello2"}</h1>
      <h1>{0&&"Hello3"}</h1>
       <h1>{1&&"Hello4"}</h1>
        <h1>{true&&"Hello5"}</h1>
        <h1>{false&&"Hello6"}</h1>
        <h1>{0&&0}</h1>
    </div>
  )
}

export default AndOrOperator