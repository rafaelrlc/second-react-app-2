import React, { useState, Fragment } from "react";
import AddUser from "./Components/Users/AddUser";
import UserData from "./Components/Users/UserData";
const INITIAL_USERS = [
  {
    name: "John Doe",
    age: 30,
    id: "1",
    location: "Rio de Janeiro",
  },
  {
    name: "Jane Doe",
    age: 25,
    id: "2",
    location: "São Paulo",
  },
  {
    name: "Jack Doe",
    age: 20,
    id: "3",
    location: "São Paulo",
  },
];

function App() {
  const [userlist, setUserList] = useState(INITIAL_USERS);

  const removeUser = (ide) => {
    const newList = userlist.filter((item) => item.id !== ide);
    setUserList(newList);
  };

  const addUserHandler = (newuserName, newuserAge, newuserLocation) => {
    const new_user = {
      name: newuserName,
      age: newuserAge,
      id: Math.random().toString(),
      location: newuserLocation,
    };
    setUserList((prevUserList) => [...prevUserList, new_user]);
  };

  return (
    <Fragment>
      <AddUser addUser={addUserHandler}></AddUser>
      <UserData userList={userlist} deleteUser={removeUser}></UserData>
    </Fragment>
  );
}

export default App;
