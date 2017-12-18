import React from "react";
import styles from "./styles.css";

let inputRef;

const Input = props => (
  <form
    onSubmit={event => {
      event.preventDefault();
      if (inputRef === undefined) return;
      props.submitAction(inputRef.value);
      inputRef.value = "";
    }}
    className={styles.wrapper}
  >
    <input
      ref={element => {
        inputRef = element;
      }}
      type="text"
      className={styles.input}
    />
  </form>
);

export default Input;
