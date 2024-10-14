import useCounter, { useActions } from "../store/use-counter";


function  ManageCounter (){

    // const incrementCount = useCounter((state) => state.handleIncrementCount);
    const {handleIncrementCount } =  useActions()
    // console.log(incrementCount); 

    return (
        <button
        style={{
        marginBottom : '20px',
        background : "black",
        color : "white",
        fontSize : "18px",
        fontWeight : "bolder"
    }}
        // onClick={incrementCount}
        onClick={handleIncrementCount}
    >
        Handle Counter Value</button>
    )
};

export default ManageCounter;