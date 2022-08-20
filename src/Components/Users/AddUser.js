import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
const AddUser = (props) => {
  const [enteredUserName, setUserName] = useState("");
  const [enteredUserAge, setUserAge] = useState("");
  const [enteredUserLocation, setUserLocation] = useState("");
  const [errorMessage, setError] = useState(null);

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0 ||
      enteredUserLocation.trim().length === 0
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

  return (
    <Wrapper>
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
            onChange={(event) => setUserName(event.target.value)}
            id="username"
            type="text"
            value={enteredUserName}
          ></input>
          <label htmlFor="age">Idade:</label>
          <input
            onChange={(event) => setUserAge(event.target.value)}
            id="age"
            type="number"
            value={enteredUserAge}
          ></input>
          <label htmlFor="location">Localização:</label>
          <input
            onChange={(event) => setUserLocation(event.target.value)}
            id="location"
            type="text"
            value={enteredUserLocation}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
