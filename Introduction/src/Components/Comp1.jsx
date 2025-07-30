import React, { createContext, useState } from 'react'
import Comp2 from './Comp2';
import '../App.css'

export const UserApp = createContext();

function Comp1() {

    const [username, setusername] = useState("Guest");

  return (
    <>
        <div className='box1'>
            <UserApp.Provider value={username}>
            <h1><b>Parent</b></h1>
            <p>Welcome {username === "" ? "Guest" : username}</p>
            <input type='text' placeholder='Enter your name' 
            onChange={(e) => {
                setusername(e.target.value);
            }} />

            <Comp2/>
            </UserApp.Provider>
        </div>
    </>
  )
}

export default Comp1