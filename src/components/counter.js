import React,{useState} from 'react'
function Counter() {
    const[counter1, setCounter] = useState(0)


    const increamentHandler=()=>{
        setCounter(counter1+1)
    }
    const decreamentHandler=()=>{
        setCounter(counter1-1)
    }
    return(
        <div>
            <h2> Counter App </h2>
            <button onClick={decreamentHandler}>-</button>
            <span style={{padding:20}}>{counter1}</span>
            <button onClick={increamentHandler}>+</button>
        </div>
    )
}
export default Counter;