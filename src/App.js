import React from "react";
import TodoList from "./todo/TodoList";
import Context from "./context";
import AddTodo from "./todo/AddTodo";

const App = () => {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Hello man" },
  ]);

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeToDo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (title) => {
    setTodos([
      ...todos,
      {
        title,
        id: Date.now(),
        completed: false,
      },
    ]);
  };

  return (
    <Context.Provider value={{ removeToDo }}>
      <div className="wrapper">
        <h1>To do list</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>No Todos</p>
        )}
      </div>
    </Context.Provider>
  );
};

export default App;
