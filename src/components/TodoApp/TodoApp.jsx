import './TodoApp.css';
import { useTodos } from '../../hooks/useTodos';
import { TodoAdd } from '../TodoAdd/TodoAdd';
import { TodoList } from '../TodoList/TodoList';

export const TodoApp = () => {
    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();

    return (
        <>
            <h1>TodoApp: { todosCount }, <small>pending to do: { pendingTodosCount }</small> </h1>
            <hr />

            <div className="row">
                <div className="col-5 col-margin">
                    <h4>Add TODO</h4>
                    <hr />
                    <TodoAdd
                        onNewTodo={ handleNewTodo }
                    />
                </div>
                <div className="col-7 col-margin">
                    <TodoList
                        todos={ todos }
                        onDeleteTodo={ handleDeleteTodo }
                        onToggleTodo={ handleToggleTodo }
                    />
                </div>

            </div>
        </>
    );
}
