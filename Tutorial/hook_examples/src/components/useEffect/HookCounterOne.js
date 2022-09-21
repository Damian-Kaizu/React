import React, { useState, useEffect } from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    useEffect(() => {
        console.log('useEffect - updating the document title')
        document.title = `You click ${count} times`
    },[count])
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <h1>Everyone was gangster until the one and only {name} comes in</h1>
            <button onClick={() => setCount(prev => prev + 1)}>Click {count}</button>
        </div>
    )
}

export default HookCounterOne