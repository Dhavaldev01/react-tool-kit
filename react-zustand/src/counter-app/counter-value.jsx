import useCounter from "../store/use-counter";





function  CounterValue (){

    const count = useCounter(state => state.count);
    // const {count} = stateValue
    // console.log(stateValue);

    return (
        <div>Counter Value is {count}</div>
    )
};

export default CounterValue;