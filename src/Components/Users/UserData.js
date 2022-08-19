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
            {user.name} tem {user.age} anos e mora em {user.location}
            <div className={classes.buttons}>
              {" "}
              <button className={classes.button_edit}>Edit</button>
              <button
                className={classes.button_delete}
                onClick={() => props.deleteUser(user.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserData;
