import React from "react";
import styles from "./styles.css";
import Todo from "../Todo";
import Input from "../Input";

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { content: "Buy milk", done: false },
        { content: "Buy chips", done: true }
      ]
    };

    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  addTodo(text) {
    this.setState({
      ...this.state,
      todos: [...this.state.todos, { content: text, done: false }]
    });
  }

  toggleTodo(index) {
    const todos = this.state.todos;
    todos[index].done = !todos[index].done;
    this.setState({
      ...this.state,
      todos
    });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.todos}>
          {this.state.todos.map((todo, index) => (
            <Todo
              key={index}
              data={todo}
              switch={() => this.toggleTodo(index)}
            />
          ))}
        </div>
        <Input submitAction={this.addTodo} />
      </div>
    );
  }
}

export default List;
