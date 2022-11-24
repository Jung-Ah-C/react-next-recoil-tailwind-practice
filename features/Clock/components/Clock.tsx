import React, { useEffect, useState } from "react";

const Clock: React.FC = () => {
    const [dateState, setDateState] = useState<string>('');
    const [timeState, setTimeState] = useState<string>('');
    useEffect(() => {
        setInterval(() =>{
            const currentDate = new Date();
            setDateState(currentDate.toLocaleDateString());
            setTimeState(currentDate.toTimeString().split(' ')[0]);
        }, 1000);
    }, []);

    return (
        <div className="h-[42px] bg-[#EFEFEF] border border-[#DCDCDC] hover:bg-[#F0F3FF] flex items-center gap-2.5 p-2 rounded-[4px]">
            <strong className="text-[20px]">{dateState} {timeState}</strong>
        </div>
    );
}

export default Clock;