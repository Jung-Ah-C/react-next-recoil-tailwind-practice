import React from "react";

const TodoHeader: React.FC = () => {
    return (
        <div className="flex items-center py-1 gap-2.5 h-[84px]">
            <header>
                <strong className="text-[32px]">Hi! ✋ Catze!</strong>
            </header>
        </div>
    );
}

export default React.memo(TodoHeader);