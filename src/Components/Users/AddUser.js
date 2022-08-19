import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
const AddUser = (props) => {
  const [enteredUserName, setUserName] = useState("");
  const [enteredUserAge, setUserAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserName.trim().length === 0
    ) {
      console.log("no empyt input please"); //abrir pop-pup
      return;
    } else if (+enteredUserAge < 1) {
      console.log("invalid age"); //abrir pop-pup
      return;
    } else {
      console.log(enteredUserName, enteredUserAge);
      props.addUser(enteredUserName, enteredUserAge);
      setUserName("");
      setUserAge("");
    }
  };

  const usernameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  return (
    <Card className={classes.add_user__box}>
      {" "}
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          onChange={usernameChangeHandler}
          id="username"
          type="text"
          value={enteredUserName}
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input
          onChange={ageChangeHandler}
          id="age"
          type="number"
          value={enteredUserAge}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
