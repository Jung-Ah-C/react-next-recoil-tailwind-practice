import { Todo } from './TodoForm';
import Button from '@/components/Button';
import React, { useCallback, useState } from 'react';
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon as FilledCheckCircleIcon } from "@heroicons/react/24/solid";

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
        <div className="min-h-[61px] rounded-[8px] bg-[#FFFFFF] border border-[rgb(51, 51, 51, 0.5)] flex w-full">
            <div className={`flex flex-col grow p-2 gap-2 rounded-l-[8px] transition-all duration-200 ${buttonState ? "bg-[#E5FFD9]" : "bg-white"}`}>
                <span className="font-bold text-[16px] text-[#333333]">{task}</span>
                <time className="font-bold text-[12px] text-[#BABABA]">{datetime}</time>
            </div>
            <div className="flex items-center justify-center gap-2.5 p-[1px] w-[44px]">
                <Button className="bg-white" type="button" onClick={handleChange}>{buttonState ? <FilledCheckCircleIcon className="w-[24px] h-[24px] stroke-white fill-[#24C73E]"/> : <CheckCircleIcon className="w-[24px] h-[24px] stroke-[#0F172A]"/>}</Button>
            </div>
        </>
    );
}

export default TodoItem;
