import React, { useState } from 'react'

const ControlledInputForm = () => {
  var [uname,setUname]=useState("");
  var [mail,setMail]=useState("");
  var [age,setAge]=useState("");
  var [people,setPeople]=useState([]);
    var handleSubmit=(event)=>{
        // console.log(event);//event=complete form
        // //target:form[0: 1: 2: 3:]
        // console.log(event.target);
        // console.log(event.target[0].value);
        // console.log(event.target[1].value);
        // console.log(event.target[2].value);
        event.preventDefault();
        if(uname && age && mail)
        {
          var person={uname,mail,age};
          setPeople((p)=>{
            return [...p,person]
          });
          console.log(people);
          setUname("");
          setMail("");
          setAge("")
        }
    }
    var changeName=(event)=>{
        console.log("UNAME:",event.target.value)
        setUname(event.target.value)
    }
    var changeMail=(event)=>{
        console.log("EMAIL:",event.target.value)
        setMail(event.target.value);
    }
    var changeAge=(event)=>{
        console.log("AGE:",event.target.value)
        setAge(event.target.value)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>User Name</label>
        <input type="text" id="uname" name="uname" onChange={changeName} value={uname}/><br/>
        <label>User Email</label>
        <input type="email" id="mail" name="mail" onChange={changeMail} value={mail}/><br/>
        <label>User Age</label>
        <input type="number" id="age" name="age" onChange={changeAge} value={age}/><br/>
        <button type="submit">Login</button>
      </form>
      {/* <h1>{uname} {mail} {age}</h1> */}
      {people.map((person)=>{
        return(
          <div key={person.uname}> 
    <h1>{person.uname} {person.age} {person.mail}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default ControlledInputForm