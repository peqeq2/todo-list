
import './styles/TodoAppStyles.css'
import { TodoList } from './components/TodoList'
import './styles/TodoListStyles.css'

export const TodoApp = () => {
  return (
    <div className='todo-applist'>
      <TodoList/>
    </div>
  )
}
