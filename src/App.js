import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserData from "./Components/Users/UserData";
const INITIAL_USERS = [
  {
    name: "John Doe",
    age: 30,
    id: "1",
  },
  {
    name: "Jane Doe",
    age: 25,
    id: "2",
  },
  {
    name: "Jack Doe",
    age: 20,
    id: "3",
  },
];

function App() {
  const [userlist, setUserList] = useState(INITIAL_USERS);

  const removeUser = (ide) => {
    const newList = userlist.filter((item) => item.id !== ide);
    setUserList(newList);
  };

  const addUserHandler = (newuserName, newuserAge) => {
    const new_user = {
      name: newuserName,
      age: newuserAge,
      id: Math.random().toString(),
    };
    setUserList((prevUserList) => [...prevUserList, new_user]);
  };

  return (
    <div>
      <AddUser addUser={addUserHandler}></AddUser>
      <UserData userList={userlist} deleteUser={removeUser}></UserData>
    </div>
  );
}

export default App;
