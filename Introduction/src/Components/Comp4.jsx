import React, { useContext } from 'react'
import { UserApp } from './Comp1';
import '../App.css'

function Comp4(props) {

    const user = useContext(UserApp);

  return (
    <>
        <div className='box4'>
            <h2><b>Child 03</b></h2>
            <p>Welcome {user === "" ? "Guest" : user}</p>
        </div>
    </>
  )
}

export default Comp4