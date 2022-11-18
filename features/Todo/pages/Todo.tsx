import React from 'react';
import Clock from "@/features/Clock/components/Clock";
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';

const Todo: React.FC = () => {
    return (
        <div className="Todo">
            <header className="Todo-header">
                <h1>Hi! ✋ Catze!</h1>
            </header>
            <Clock/>
            <div>
                <TodoForm/>
            </div>
            {/* TodoList 컴포넌트 생성 후 그 안에서 TodoItem 관리 */}
            <div>
                <TodoItem/>
            </div>
        </div>
    );
}


export default Todo; 