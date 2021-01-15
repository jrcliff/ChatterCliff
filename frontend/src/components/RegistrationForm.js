import React, { useState } from 'react'


export default function RegistrationForm(props) {
    const userUrl = 'http://localhost:3000/users'
    const [details, setDetails] = useState({
        username: '', 
        email: '', 
        password: '',
        password_confirmation: ''
    });

    const submitHandler = e => {
        e.preventDefault();
        const data = details
        const reqObj = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: data.username,
                email: data.email
            })
        }
        fetch(userUrl, reqObj)
        .then(res => res.json())
        .then(user => console.log(user))
    }

    return (
       <form onSubmit={submitHandler}>
            <div className='form-inner'>
                <h2>SignUp</h2>
                {/* {(error != "") ? ( <div className='error'>{error}</div> ) : ""} */}
                <div className='form-group'>
                    <input type='text' placeholder='Username' onChange={e => setDetails({...details, username: e.target.value})} value={details.username} name='username' id='username' />
                </div>
                <div className='form-group'>
                    <input type='email' placeholder='Email' value={details.email} onChange={e => setDetails({...details, email: e.target.value})}  name='email' id='email' />                
                </div>
                <div className='form-group'>
                    <input type='password' placeholder='Password' value={details.password} onChange={e => setDetails({...details, password: e.target.value})} name='password' id='password' />
                </div>
                <div className='form-group'>
                    <input type='password' placeholder='Password Confirmation' value={details.password_confirmation} onChange={e => setDetails({...details, password_confirmation: e.target.value})} name='password_confirmation' id='password_confirmation' />
                </div>
                <input type='submit' value='Sign Up' />
            </div>
        </form>
    )
}
