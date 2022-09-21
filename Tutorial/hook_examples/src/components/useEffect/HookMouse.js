import React,{useState,useEffect} from 'react'

function HookMouse() {
    const [x,setX]= useState(0);
    const [y,setY]= useState(0);

    const logMousePosition=e=>{
        setX(e.clientX)
        setY(e.clientY)

    }
    useEffect(()=>{
        window.addEventListener('mousemove',logMousePosition)
        return ()=>{
            console.log('removeEventListener');
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])
  return (
    <div>
        Hooks -x{x} -y {y}
    </div>
  )
}

export default HookMouse