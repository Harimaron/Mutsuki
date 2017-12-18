import React from "react";
import styles from "./styles.css";

const Todo = props => (
  <div
    onClick={props.switch}
    className={`${styles.wrapper} ${
      props.data.done === true ? styles.done : null
    }`}
  >
    {props.data.content}
  </div>
);

export default Todo;
