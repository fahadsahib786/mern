import React from 'react';
const Counter = () => {
    const [count,setCount]=React.useState(5);
    const countUp=()=>{
        setCount(count+1);
    }
    alert("Count value is "+count);
    const countDown=()=>{
        setCount(count-1);
    }
    alert("Count value is "+count);
    return ( <div>
        <h5>Counter</h5>
        <button onClick={countDown}>-</button>{count}<button onClick={countUp}>+</button>
        current value is {count}
    </div> );
}
 
export default Counter;