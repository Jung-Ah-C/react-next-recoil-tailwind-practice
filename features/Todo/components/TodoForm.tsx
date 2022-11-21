import React, { useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import TodoItem from "./TodoItem";

export type Todo = {
    id: number;
    task: string;
    isCompleted: boolean;
    datetime: string;
}

const TodoForm: React.FC = () => {
    const [task, setTask] = useState<string>('');
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    }

    const timestamp = () => {
        const today = new Date();
        today.setHours(today.getHours() + 9); // UTC 시간을 한국 시간으로 맞춰줌
        return today.toISOString().replace('T', ' ').substring(0, 19);
    }

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // 할 일을 입력했는지 확인
        if(task.trim().length === 0) {
            alert("Please enter your task!"); 
            return;
        }
        
        // 할 일 생성
        const todo: Todo = {
            id: Date.now(),
            task: task,
            isCompleted: false,
            datetime: timestamp(),
        }

        // 할 일 목록에 새 할 일 추가
        setTodos([todo, ...todos]);

        // 입력한 task 비우기
        setTask('');
    }

    const handleChange = (todo: Todo) => {
        const index = todos.indexOf(todo);
        todo.isCompleted = !todo.isCompleted;
        todos.splice(index, 1, todo);
        setTodos([...todos]);
    }

    const handleDelete = (id: number) => {
        const index = todos.findIndex((todo) => todo.id === id);
        todos.splice(index, 1);
        setTodos([...todos]);
    }

    return (
        <div className="todo-contents-wrapper">
            <h4>What Should I do today?</h4>
            <form onSubmit={handleFormSubmit}>
                <Input placeholder="Enter your task." value={task} onChange={handleInput}/>
                <Button type="submit" text="Add"/>
            </form>
            {todos.map((todo) => (
                <TodoItem todo={todo} />
            ))}
        </div>
    );
}

export default TodoForm;