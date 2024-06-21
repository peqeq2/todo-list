import './TodoItem.css';
import PropTypes from 'prop-types';

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <div className="d-flex align-items-center">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggleTodo(todo.id)}
          className="form-check-input me-2"
        />
        <span
          className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''}`}
          onClick={() => onToggleTodo(todo.id)}
        >
          {todo.description}
        </span>
      </div>
      <button
        className="btn btn-danger"
        onClick={() => onDeleteTodo(todo.id)}
      >
        Borrar
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    description: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};
