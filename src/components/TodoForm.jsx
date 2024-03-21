import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/TodoFormStyles.css";

export const TodoForm = (props) => {

  const [task, setTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: task
    })

    setTask('');


  }

  return (
    <form className="todo-form" onSubmit={handleSubmit} >
      <input className="todo-input"
             type="text"
             placeholder="Enter a task"
             onChange={(e)=> setTask(e.target.value)}
             value={task}
             />
      <button className="button-form" type="submit">Add task</button>
    </form>
  )
}


TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
