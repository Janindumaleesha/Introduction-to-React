import React from 'react'
import HeaderContent from '../components/HeaderContent/HeaderContent.jsx'
import LoggedIn from '../components/LoggedIn.jsx';
import LoggedOut from '../components/LoggedOut.jsx';

function contact() {

  const loggedIn = true;

  const names = ["Janindu", "Maleesha", "Ravindu", "Hirusha"];

  const namesCount = names.length;

  return (
    <>
        <HeaderContent />
        <div>contact</div>
        {loggedIn && <LoggedIn/>}
        {!loggedIn && <LoggedOut/>}
        {/* {namesCount > 0 && names.map((name) => {
          return <h2>{name}</h2>
        })}
        {!namesCount > 0 && <p>No Provided.</p>} */}
        {namesCount > 0 ? (names.map((name) => {
          return <h2>{name}</h2>
        })) : (<p>No Provide.</p>)}
    </>
  )
}

export default contact