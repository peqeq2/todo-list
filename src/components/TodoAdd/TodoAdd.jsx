import './TodoAdd.css';
import PropTypes from 'prop-types';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {
    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        }

        onNewTodo(newTodo);
        onResetForm();
    }

    return (

        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="¿What do I have to do?"
                className="form-control"
                name="description"
                value={description}
                onChange={onInputChange}
            />

            <button
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Add
            </button>
        </form>
    );
};

TodoAdd.propTypes = {
    onNewTodo: PropTypes.func.isRequired,
};
