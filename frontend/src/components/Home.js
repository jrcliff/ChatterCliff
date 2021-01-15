import React, { useState } from 'react'
import LoginForm from './LoginForm'


export default function Home(user, Login, error, Logout) {
    return (
        <div>
        {(user.email != '') ? (
        <div className='welcome'>
          <h2>Welcome, <span>{user.username}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
            
        </div>
    )
}
