import React from "react";

const TodoHeader: React.FC = () => {
    return (
        <header className="todo-header">
            <h1>Hi! ✋ Catze!</h1>
        </header>
    );
}

export default React.memo(TodoHeader);