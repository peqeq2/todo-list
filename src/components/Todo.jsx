import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import '../styles/TodoStyles.css';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ id, text, onRemove, onToggle, completed, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    onEdit(editedText);
  };

  return (
    <div className="todo-div">
      <li className="todo-li" key={id}>
        <input
          className="checkbox"
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
        />
        {isEditing ? (
          <input
            className="edit-input"
            type="text"
            value={editedText}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            autoFocus
          />
        ) : (
          <span className={completed ? 'completed-task' : ''} onDoubleClick={handleDoubleClick}>
            {text}
          </span>
        )}

        <button className="button-todo" onClick={onRemove}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </li>
    </div>
  );
};

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  completed: PropTypes.bool,
  onEdit: PropTypes.func.isRequired,
};
