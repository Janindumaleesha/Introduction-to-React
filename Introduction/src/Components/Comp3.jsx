import React, { useContext } from 'react'
import Comp4 from './Comp4'
import '../App.css'
import { UserApp } from './Comp1';

function Comp3() {

    const user = useContext(UserApp);

  return (
    <>
        <div className='box3'>
            <h2><b>Child 02</b></h2>
            <p>Welcome {user === "" ? "Guest" : user}</p>
            <Comp4/>
        </div>
    </>
  )
}

export default Comp3