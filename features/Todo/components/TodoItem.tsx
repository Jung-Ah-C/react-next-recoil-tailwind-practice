import { Todo } from './TodoForm';

type TodoProps = {
    todo: Todo
}

const TodoItem: React.FC<TodoProps> = ({ todo }) => {
    const { id, task, isCompleted, datetime } = todo;
    return (
        <div className="todo-item-wrapper">
            <div style={{ width: '50%', float: 'left' }}>
                <h3>{task}</h3>
                <h5>{datetime}</h5>
            </div>
            <div style={{ width: '50%', float: 'right' }}>
                checkmark
            </div>
        </div>
    );
}

export default TodoItem;