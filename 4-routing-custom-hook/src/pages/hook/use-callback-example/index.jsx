import { useState } from "react";
import Counter from "./counter";
import { useCallback } from "react";


function UseCallbackExample(){

    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const memoriseSetCountOneFunc = useCallback(()=> setCountOne(countOne + 1) ,[countOne]);
    const memoriseSetCountTwoFunc = useCallback(()=> setCountTwo(countTwo + 1) ,[countTwo]);

    return(
        <div>
            <h1>UseCall back</h1>
            <Counter counterValue={countOne} onClick={memoriseSetCountOneFunc}/>
            <Counter counterValue={countTwo} onClick={memoriseSetCountTwoFunc}/>
        </div>
    )
}

export default UseCallbackExample;