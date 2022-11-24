import React from 'react';
import Clock from "@/features/Clock/components/Clock";
import TodoForm from '../components/TodoForm';
import TodoHeader from '../components/TodoHeader';

const TodoPage: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen w-min-[300px]">
            <TodoHeader/>
            <Clock/>
            <TodoForm/>
        </div>
    );
}

export default TodoPage; 