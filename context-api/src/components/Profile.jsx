import React, { useContext } from 'react'
import UserContext from '../context/UserContext';


function Profile() {
  const {user} = useContext(UserContext);

  if(!user) return <div>Please login</div>

  console.log(user)

  return (
    <div>
      <h1>Profile</h1>
      <br />
      <p>Welcome {user}</p>
      </div>
  )
}

export default Profile