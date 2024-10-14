import { useState } from "react"
import Child from "./child";


function Counter(){

    const [Count , setCount] = useState(0);

 function handleClick (){
    setCount(Count + 1); 
 }

    return (
        <div>
            <p>Count is : {Count}</p>
            <button onClick={handleClick}>Click</button>
            <Child count={Count}/>
        </div>
    )
}

export default Counter;