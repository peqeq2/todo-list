import './TodoList.css';
import PropTypes from 'prop-types';
import { TodoItem } from "../TodoItem/TodoItem.jsx";

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (

    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>

  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      // Aquí puedes agregar más validaciones para las propiedades de 'todo' si es necesario
    })
  ).isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};
