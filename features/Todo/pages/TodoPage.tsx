import React from 'react';
import Clock from "@/features/Clock/components/Clock";
import TodoForm from '../components/TodoForm';
import TodoHeader from '../components/TodoHeader';

const TodoPage: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="flex flex-col max-w-75 gap-0.5 w-full p-10 xl:w-[380px]">
                <TodoHeader/>
                <Clock/>
                <TodoForm/>
            </div>
        </div>
    );
}

export default TodoPage; 