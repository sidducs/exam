
import React,{useState} from "react";
function Count(){
    const [count, setCount] = useState(0);
    function Increment(){
        setCount(count+1);
    }
    function Decrement(){
        setCount(count-1);
    }

  
    return(
        <>
        <h1>Counter:{count}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        </>
    )
}
export default Count;

