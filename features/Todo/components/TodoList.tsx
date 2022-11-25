import { Todo } from './TodoForm';
import TodoItem from './TodoItem';

interface Todos {
    todos: Todo[];
}

const TodoList: React.FC<Todos> = ({ todos }) => {
    return (
        <div className="overflow-y-auto h-[289px]">
            <ul className="flex flex-col gap-2">
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <TodoItem todo={todo}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;