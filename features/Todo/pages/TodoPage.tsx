import React from 'react';
import Clock from "@/features/Clock/components/Clock";
import TodoForm from '../components/TodoForm';
import TodoHeader from '../components/TodoHeader';

const TodoPage: React.FC = () => {
    return (
        <div className="todo-wrapper">
            <TodoHeader/>
            <Clock/>
            <TodoForm/>
        </div>
    );
}


export default TodoPage; 