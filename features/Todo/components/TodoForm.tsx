import React, { useCallback, useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import TodoList from "./TodoList";
import { getTimeStamp } from "../utils/TimeStamp";

export interface Todo {
    id: number;
    task: string;
    isCompleted: boolean;
    datetime: string;
}

const TodoForm: React.FC = () => {
    const [task, setTask] = useState<string>('');
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    }, [task]);

    const handleFormSubmit = useCallback((event: React.FormEvent) => {
        event.preventDefault();

        // 할 일을 입력했는지 확인
        if (task.trim().length === 0) {
            alert("Please enter your task!"); 
            return;
        }
        
        // 할 일 생성
        const todo: Todo = {
            id: Date.now(),
            task: task,
            isCompleted: false,
            datetime: getTimeStamp(),
        }

        // 할 일 목록에 새 할 일 추가
        setTodos([todo, ...todos]);

        // 입력한 task 비우기
        setTask('');
    }, [todos, task]);

    return (
        <div className="bg-[#FFFFFF] border border-[#DCDCDC] rounded-[4px] flex flex-col p-2.5 gap-2">
            <div className="bg-[#EFEFEF] flex flex-col p-2 gap-2.5 rounded-[4px]">
                <span className="text-[14px]">What Should I do today?</span>
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-2.5">
                    <div className="p-2">
                        <Input placeholder="Enter your task." value={task} onChange={handleInput}/>
                    </div>
                    <div className="flex justify-end">
                        <Button type="submit">Add</Button>
                    </div>
                </form>
            </div>
            <TodoList todos={todos}/>
        </div>
    );
}

export default TodoForm;