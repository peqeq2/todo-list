import { useState } from "react";
import { TodoForm } from "./TodoForm"
import { Todo } from "./Todo";
import "../styles/TodoListStyles.css";


export const TodoList = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if(!todo.text || /^\s*$/.test(todo.text)){
      return
    }

    const newTodos = [todo, ...todos]

    setTodos(newTodos)
  }

  const removeTask = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const handleEdit = (id, newText) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1 className="tittle">To Do List</h1>
      <TodoForm onSubmit={addTodo} />
      {todos.length > 0 ? (
        <ul className="todo-ul">
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              text={todo.text}
              onRemove={() => removeTask(todo.id)}
              completed={todo.completed || false}
              onToggle={() => toggleComplete(todo.id)}
              onEdit={(newText) => handleEdit(todo.id, newText)}
            />
          ))}
        </ul>
      ) : (
        <p className="comt">You have no tasks to do.</p>
      )}
    </>
  );
};
