import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(prev => prev + 1);
    }
    useEffect(() => {
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval)
        };
    }, [])

    return (
        <div> Count {count}</div>
    )
}

export default IntervalHookCounter