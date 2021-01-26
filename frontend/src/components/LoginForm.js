import React, { useState } from 'react'
import { FormGroup } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';
import { Input } from '@material-ui/core';
import RegistrationForm from './RegistrationForm';
import { Link, Redirect } from 'react-router-dom'


export default function LoginForm({ Login, error, props }) {
    const [details, setDetails] = useState({
        username: '', 
        email: '', 
        password: '',
        
    });

    const submitHandler = e => {
        e.preventDefault();
        let user = {
            username: details.username,
            email: details.email,
            password: details.password

        }
        let reqObj = {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(user)
        };
        fetch('http://localhost:3000/login', reqObj)
        .then(res => res.json())
        .then(user => Login(user))
        .then(user => console.log(user))
        // props.Login(user)
        // console.log(details)
    }

    // console.log(props.currentUser)
    return (
        localStorage.getItem('current_user') ? <Redirect to='/home' /> :
        <form onSubmit={(e) => submitHandler(e)}>
            <div className='form-inner'>
                <h2>Login</h2>
                {(error != "") ? ( <div className='error'>{error}</div> ) : ""}
                <div className='form-group'>
                    <input type='text' placeholder='Username' onChange={e => setDetails({...details, username: e.target.value})} value={details.username} name='username' id='username' />
                </div>
                <div className='form-group'>
                    <input type='email' placeholder='Email' value={details.email} onChange={e => setDetails({...details, email: e.target.value})}  name='email' id='email' />                
                </div>
                <div className='form-group'>
                    <input type='password' placeholder='Password' value={details.password} onChange={e => setDetails({...details, password: e.target.value})} name='password' id='password' />
                </div>
                
                <input type='submit' value='Login' />
                <Link to={<RegistrationForm />} >
                <input type='submit' value='New to us? Sign Up' /> 

                </Link>
            </div>
        </form>
       
    )
}

