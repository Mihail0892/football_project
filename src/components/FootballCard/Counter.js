import React, { useEffect, useState } from 'react'

export const Counter = () => {
    // const firstValue=0;
    // localStorage.setItem('count',JSON.stringify(firstValue));
    const like = JSON.parse(localStorage.getItem("count"))
    const [counter,setCounter]=useState(like?like:0);

    useEffect(()=>{
        localStorage.setItem("count", JSON.stringify(counter))
    },[counter]);

    const handleMinClick = ()=>{
        setCounter(-1+counter);
        // localStorage.setItem("count", JSON.stringify(counter));
    };

    const handleMaxClick = ()=>{
        setCounter(1+counter);
        // localStorage.setItem("count", JSON.stringify(counter));
    };

  return (
    <div>
        <button onClick={handleMinClick}>-</button>
        {counter}
        <button onClick={handleMaxClick}>+</button>
    </div>
  )
}

export default Counter;
