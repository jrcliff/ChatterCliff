import React, { useState } from 'react'
import { FormGroup, TextField } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';
import { Input } from '@material-ui/core';
import RegistrationForm from './RegistrationForm';
import { Link, Redirect, withRouter } from 'react-router-dom'


function LoginForm({ Login, error, props }) {
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
        // window.location.reload()
        // props.Login(user)
        // console.log(details)
    }

    // console.log(props.currentUser)
    return (
        sessionStorage.getItem('currentUser') ? <Redirect to='/home' /> :
        <form onSubmit={(e) => submitHandler(e)}>
            <div className='form-inner'>
                <h2>Login</h2>
                {(error != "") ? ( <div className='error'>{error}</div> ) : ""}
                <div className='form-group'>
                    <TextField type='text' placeholder='Username' onChange={e => setDetails({...details, username: e.target.value})} value={details.username} name='username' id='username' />
                </div>
                <div className='form-group'>
                    <TextField type='email' placeholder='Email' value={details.email} onChange={e => setDetails({...details, email: e.target.value})}  name='email' id='email' />                
                </div>
                <div className='form-group'>
                    <TextField type='password' placeholder='Password' value={details.password} onChange={e => setDetails({...details, password: e.target.value})} name='password' id='password' />
                </div>
                
                <input type='submit' value='Login' />
                
                <Link to='/registration' >
                <input type='submit' value='New to us? Sign Up' /> 

                </Link>
            </div>
        </form>
       
    )
}
export default withRouter(LoginForm)

