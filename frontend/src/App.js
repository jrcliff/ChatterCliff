import React, {useState, useEffect} from 'react'
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './components/Home'


function App() {
  const roomsUrl = 'http://localhost:3000/chat_rooms'
  const adminUser = {
    email: 'admin@admin.com',
    password: 'password'
  }
  useState({
    isLoggedIn: false
  })
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    fetch(roomsUrl).then(
      res => res.json()
      ).then(roomArr => localStorage.setItem('rooms', JSON.stringify(roomArr))
      )
  })
  
  
  const [user, setUser] = useState(sessionStorage.getItem('currentUser') || {})

  useEffect(() => {
    
  })

  const [error, setError] = useState('');

  const Login = details => {
    let obj = {};
    // setUser(details);
    sessionStorage.setItem('currentUser', JSON.stringify(details))
    // obj = JSON.parse(sessionStorage.currentUser);
    // sessionStorage.setItem('currentUser', obj)
    console.log(details);
    console.log(user);
    <Redirect to='/home' />
    
  }

  const SignUp = details => {
    console.log(details)
    setUser({
      username: details.username,
      email: details.email,
      password: details.password
    });
  }

  const Logout = () => {
    console.log('Logout');
    localStorage.removeItem('currentUser')
    // setUser({username: '', email: '', password: ''})
    
  }

  return (
    <div className="App">
    {/* {console.log(user)} */}
      <Router>
      <Route path='/login'>
      {(user.email != null) ? (
        <div className='welcome'>
          <h2>Welcome, <span>{user.username}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm user={user} Login={Login} error={error} />
      )}
      </Route>
      <Route path='/signup'>
        <RegistrationForm SignUp={SignUp} />
      </Route>
      <Route path='/home'>
        <Home user={user} rooms={rooms} />
      </Route>
      </Router>
    </div>
  );
}

export default App;
