import React, {useState} from 'react'

export default function Counter(props) {
    const [count,setCount] = useState (0)
    const incrementCounter = () => {
        setCount (() => count+1)
        // console.log('ok');
    }
    const decrementCounter = () => {
        setCount (() => count-1)
        // console.log('ok');
    }
  return (
    <div>
        <button onClick={() => incrementCounter ()}>+</button>
        <span>{count}</span>
        <button onClick={() => decrementCounter ()}>-</button>
    </div>
  )
}
