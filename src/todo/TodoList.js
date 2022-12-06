import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItems";

const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
};

const TodoList = (props) => {
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, index) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          index={index}
          onChange={props.onToggle}
        />
      ))}
    </ul>
  );
};

TodoList.prototype = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TodoList;
