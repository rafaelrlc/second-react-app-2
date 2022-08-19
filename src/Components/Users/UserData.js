import React from "react";
import Card from "../UI/Card";
import classes from "./UserData.module.css";
const UserData = (props) => {
  //recebe a lista de usuários

  return (
    <Card className={classes.user}>
      <ul>
        {props.userList.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age}) years old
            <button
              className={classes.button}
              onClick={() => props.deleteUser(user.id)}
            >
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserData;
