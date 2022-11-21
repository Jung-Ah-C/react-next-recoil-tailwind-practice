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
        <div className="clock-wrapper">
            <h2>{dateState} {timeState}</h2>
        </div>
    );
}

export default Clock;