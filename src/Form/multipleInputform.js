import React, { useState } from "react";

const MultipleInputForm = () => {
  var [person, setPerson] = useState({
    uname: "",
    age: "",
    mail: "",
    password: "",
  });
  var [people, setPeople] = useState([]);
  var handleSubmit = (event) => {
    event.preventDefault();
    if (person.uname && person.mail && person.age && person.password) {
      setPeople((p) => {
        return [...p, person];
      });
    }
    setPerson({ uname: "", age: "", mail: "", password: "" });
  };
  var getData = (event) => {
    console.log("NAME", event.target.name);
    console.log("VALUE", event.target.value);
    var key = event.target.name;
    var data = event.target.value;
    //console.log(key,data)
    setPerson({ ...person, [key]: data });
    console.log(person);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>User Name</label>
        <input
          type="text"
          id="uname"
          name="uname"
          onChange={getData}
          value={person.uname}
        />
        <br />
        <label>User Email</label>
        <input
          type="email"
          id="mail"
          name="mail"
          onChange={getData}
          value={person.mail}
        />
        <br />
        <label>User Age</label>
        <input
          type="number"
          id="age"
          name="age"
          onChange={getData}
          value={person.age}
        />
        <br />
        <label>User Password</label>
        <input
          type="pasword"
          id="password"
          name="password"
          onChange={getData}
          value={person.password}
        />
        <button type="submit">SUBMIT</button>
      </form>
      {people.map((person) => {
        var { uname, mail, age, password } = person;
        return (
          <div key={uname}>
            <h1>
              {uname} {age} {mail} {password}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default MultipleInputForm;
