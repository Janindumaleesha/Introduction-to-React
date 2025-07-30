import React from 'react'
import Comp3 from './Comp3'
import '../App.css'

function Comp2() {
  return (
    <>
        <div className='box2'>
            <h2><b>Child 01</b></h2>
            {/* <p>Welcome {props.user}</p> */}

            <Comp3/>
        </div>
    </>
  )
}

export default Comp2