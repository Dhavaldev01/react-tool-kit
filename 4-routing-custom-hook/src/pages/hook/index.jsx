import { useEffect } from "react";
import { useRef } from "react";

function Hooks(){

    const countValue = useRef(0);
    const divElement  = useRef();
    const inputRefElement = useRef();

    function handleClick(){
        countValue.current ++
        console.log(countValue.current)
    }

    useEffect(()=> {

        const getDivReference = divElement.current;
        inputRefElement.current.focus();
        getDivReference.style.color = 'red';

        setTimeout(()=> {
            getDivReference.style.color = "green";

            setTimeout(()=>{
            getDivReference.style.color = "blue";

            },1000)
        },2000)

        console.log(getDivReference);
    },[])


    return (
        <div>
            <h1>Use ref , use Callback and use memo hook</h1>
            <button onClick={handleClick}>Click Me</button>
            <div ref={divElement}>Some redam text</div>
            <input name ="name" placeholder="Enter Your name" ref={inputRefElement} />
        </div>
    )
}

export default Hooks;