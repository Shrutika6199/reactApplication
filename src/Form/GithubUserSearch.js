import React, { useEffect, useState } from "react";

const GithubUserSearch = () => {
  var [users, setUsers] = useState([]);
  var [guser, setgUser] = useState("");
  var [guserDetails, setgUserDetails] = useState({});
  var [warningMessage, setWarningMessage] = useState("");
  var getAllUser = async () => {
    var response = await fetch(`https://api.github.com/users`);
    var data = await response.json();
    setUsers(data);
  };
  useEffect(() => {
    getAllUser();
    console.log(users);
  });
  var handleSubmit = (event) => {
    event.preventDefault();
    if (guser === "") {
      setgUserDetails({});
      setWarningMessage("");
      alert("please enter name and then subit");
    }
    if (guser) {
      var guserObject = users.find((user) => {
        return user.login === guser;
      });
      if (guserObject) {
        setgUserDetails(guserObject);
        setWarningMessage("");
      } else {
        setWarningMessage("sorry the user does not exist");
        setgUserDetails({});
      }
    }
  };
  var getgUser = (event) => {
    setgUser(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>ENter the UserName you would like to search</label>
        <input type="text" id="guser" name="guse" onChange={getgUser} />
        <button type="submit">SUBMIT</button>
      </form>
      {warningMessage && <h1>{warningMessage}</h1>}
      {guserDetails.id && <FoundUser guserDetails={guserDetails} />}
      {users.map((user) => {
        return <UsersList key={user.id} {...user}></UsersList>;
      })}
    </div>
  );
};
var UsersList = (user) => {
  return (
    <div>
      <h1>{user.login}</h1>
      <a href={user.html_url} target="_blank" rel="noreferrer">
        Profile Link
      </a>
    </div>
  );
};
var FoundUser = ({ guserDetails }) => {
  return (
    <>
      <h1>
        {guserDetails.id},{guserDetails.login}
      </h1>
      <img
        src={guserDetails.avatar_url}
        alt="not found"
        width="100px"
        height="200px"
      />
    </>
  );
};
export default GithubUserSearch;
