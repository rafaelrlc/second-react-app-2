import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [enteredUserName, setUserName] = useState("");
  const [enteredUserAge, setUserAge] = useState("");
  const [enteredUserLocation, setUserLocation] = useState("");
  const [errorMessage, setError] = useState(null);

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserName.trim().length === 0
    ) {
      setError({
        title: "Input Inválido.",
        message: "Não é permitido espaços em branco.",
      });
      return;
    } else if (+enteredUserAge < 1) {
      setError({
        title: "Input Inválido.",
        message: "Não é permitido idade menor que '1'.",
      });
      return;
    } else {
      console.log(enteredUserName, enteredUserAge);
      props.addUser(enteredUserName, enteredUserAge, enteredUserLocation);
      setUserName("");
      setUserAge("");
    }
  };

  const erroHandler = () => {
    setError(null);
  };

  const usernameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setUserAge(event.target.value);
  };
  const locationChangeHandler = (event) => {
    setUserLocation(event.target.value);
  };
  return (
    <div>
      {errorMessage && (
        <ErrorModal
          title={errorMessage.title}
          message={errorMessage.message}
          onConfirm={erroHandler}
        ></ErrorModal>
      )}
      <Card className={classes.add_user__box}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Nome:</label>
          <input
            onChange={usernameChangeHandler}
            id="username"
            type="text"
            value={enteredUserName}
          ></input>
          <label htmlFor="age">Idade:</label>
          <input
            onChange={ageChangeHandler}
            id="age"
            type="number"
            value={enteredUserAge}
          ></input>
          <label htmlFor="location">Localização:</label>
          <input
            onChange={locationChangeHandler}
            id="location"
            type="text"
            value={enteredUserLocation}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
