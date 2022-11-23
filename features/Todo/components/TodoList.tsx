import { Todo } from './TodoForm';
import TodoItem from './TodoItem';

interface Todos {
    todos: Todo[];
}

const TodoList: React.FC<Todos> = ({ todos }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <TodoItem todo={todo}/>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;