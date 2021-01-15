import React, { useState } from 'react'
import { FormGroup } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';
import { Input } from '@material-ui/core';
import RegistrationForm from './RegistrationForm';
import { Link, Redirect } from 'react-router-dom'


export default function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({
        username: '', 
        email: '', 
        password: '',
        
    });

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
        localStorage.setItem('currentUser', details)
        return <Redirect to='/home' />
    }
    return (
        <form onSubmit={submitHandler}>
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
