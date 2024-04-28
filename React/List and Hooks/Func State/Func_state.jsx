import React,{useState} from 'react';

function Func_state() {

    const [color, setcolor] = useState("Red");

    const blue=()=> {
      setcolor("blue");
    }
    return (
    <>
        <h1>My Favourite Color is {color}</h1>
        <button onClick={blue}>Blue</button>
        <button onClick={()=> setcolor("Green")}>Green</button>
        <button onClick={()=> setcolor("Yellow")}>Yellow</button>
        <button onClick={()=> setcolor("Orange")}>Orange</button>
    </>
  )
}

export default Func_state;