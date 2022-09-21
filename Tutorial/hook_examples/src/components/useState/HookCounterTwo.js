import React, { useState } from 'react'

function HookCounterTwo() {

    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    const IncreaseFive=()=>{
        for(let i=0;i<5;i++){
            setCount(prevState=>prevState+1)
        }
    }
    return (
        <div>
             Count : {count}
             <button onClick={() => setCount(initialCount)}>Reset</button>
             <button onClick={() => setCount(prevState=>prevState-1)}>Decrease</button>
             <button onClick={() => setCount(prevState=>prevState+1)}>Increase</button>
             <button onClick={IncreaseFive}>Reset</button>


        </div>
    )
}

export default HookCounterTwo