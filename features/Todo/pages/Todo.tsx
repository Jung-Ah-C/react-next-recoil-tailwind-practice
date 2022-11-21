import React from 'react';
import Clock from "@/features/Clock/components/Clock";
import TodoForm from '../components/TodoForm';

const Todo: React.FC = () => {
    return (
        <div className="todo-wrapper">
            <header className="todo-header">
                <h1>Hi! ✋ Catze!</h1>
            </header>
            <Clock/>
            <TodoForm/>
        </div>
    );
}


export default Todo; 