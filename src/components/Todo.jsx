import PropTypes from "prop-types";
import "../styles/TodoStyles.css";

export const Todo = ({id, text, onRemove, onToggle, completed}) => {

   return (
     <div className="todo-div">
      <li className="todo-li" key={id}>
      <input
        className="checkbox"
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
      />
      <span className={completed ? "completed-task" : ""}>{text}</span>

      <button className="button-todo" onClick={onRemove}>X</button>

      </li>
     </div>
  )
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  completed: PropTypes.bool,
};
