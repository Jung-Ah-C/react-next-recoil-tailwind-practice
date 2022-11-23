import { Todo } from './TodoForm';
import Button from '@/components/Button';
import React, { useCallback, useState } from 'react';

interface TodoProps {
    todo: Todo
}



const TodoItem: React.FC<TodoProps> = ({ todo }) => {
    const { id, task, isCompleted, datetime } = todo;
    const [buttonState, setButtonState] = useState(isCompleted);

    const handleChange = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log(todo.isCompleted)
        todo.isCompleted = !todo.isCompleted;
        setButtonState(todo.isCompleted);
    }, [todo]);

    return (
        <>
            <div style={{ width: '50%', float: 'left' }}>
                <span>{task}</span>
                <time>{datetime}</time>
            </div>
            <div style={{ width: '50%', float: 'right' }}>
                <button type='button' onClick={handleChange}>{buttonState ? <p>f</p> : <p>e</p> }</button>
            </div>
        </>
    );
}

export default TodoItem;