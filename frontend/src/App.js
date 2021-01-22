import React, {useState, useEffect} from 'react'
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'


function App() {
  const roomsUrl = 'http://localhost:3000/chat_rooms'
  const adminUser = {
    email: 'admin@admin.com',
    password: 'password'
  }

  const [rooms, setRooms] = useState([])

  useEffect(() => {
    fetch(roomsUrl).then(
      res => res.json()
      ).then(roomArr => localStorage.setItem('rooms', JSON.stringify(roomArr))
      )
  })

  const [user, setUser] = useState({username: '', email: '', password: ''});

  useEffect(() => {
    
  })

  const [error, setError] = useState('');

  const Login = details => {
    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log('logged in');
      setUser({
        username: details.username,
        email: details.email,
        password: details.password
      });
    } else {
      console.log('Details do not match!');
      setError('Details do not match!');
    }
    console.log(details);
    console.log(user);
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
    setUser({username: '', email: '', password: ''})
    
  }

  return (
    <div className="App">
      <Router>
      <Route path='/login'>
      {(user.email != '') ? (
        <div className='welcome'>
          <h2>Welcome, <span>{user.username}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
      </Route>
      <Route path='/signup'>
        <RegistrationForm SignUp={SignUp} />
      </Route>
      <Route path='/home'>
        <Home rooms={rooms} />
      </Route>
      </Router>
    </div>
  );
}

export default App;
