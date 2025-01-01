import { memo } from "react";

function Counter({counterValue , onClick}){
    console.log("this is geting render", counterValue , onClick);
    return (
        <div style={{marginLeft : "5px"}}>
            <p>{counterValue}</p>
            <button onClick={onClick}>Click</button>
        </div>
    )
}

    // const memoriseSetCountFunc = useCallback(()=> setCountOne(countOne + 1) ,[countOne]);
    export default memo(Counter);