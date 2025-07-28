import React, { useEffect, useRef, useState } from 'react'

function Lession() {

  const [input, setinput] = useState("<Input text gose here>");

  const [count, setcount] = useState(0);

  const countref = useRef(0);
  const inputref = useRef();
  const inputref1 = useRef();
  const inputref2 = useRef();

  const handlechange = (e) => {
    if (e.target.value.length == 0){
        setinput("<Input text gose here>");
    }else{
        setinput(e.target.value);
    } 
  }

  useEffect(() => {
    // setcount((count) => count + 1);
    // console.log(countref.current);
    countref.current = countref.current + 1;
    // console.log(inputref.current);
    inputref.current.style.backgroundColor = 'red';
    inputref1.current.style.backgroundColor = 'yellow';
  })

  const handleClick = () => {
    if (inputref2.current.value == ""){
        inputref2.current.focus();
    }else if(inputref2.current.value > 50){
        alert('Success');
    }else{
        alert('Error');
    }
  }

  return (
    <>
        <input type='text' onChange={handlechange} ref={inputref1}/>
        <p>You have input:{input}</p>
        {/* <p>Renderd: {count}</p> */}
        <p>Renderd: {countref.current}</p>
        <input type='text' ref={inputref}/>
        <br/><br/><br/><br/>
        <input type='text' ref={inputref2}/>
        <button onClick={handleClick}>Validation</button>
    </>
  )
}

export default Lession