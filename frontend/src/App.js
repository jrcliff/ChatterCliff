import React, {useState, useHistory, useEffect} from 'react'
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './components/Home'
import ActionCableProvider from 'react-actioncable-provider'


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
  
  
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem('currentUser')) || null
    )

  useEffect(() => {
    
  })

  const [error, setError] = useState('');
  const [isLoggedIn, setLogin] = useState(false)
  const Login = details => {
    let obj = {};
    // setUser(details);
    sessionStorage.setItem('currentUser', JSON.stringify(details))
    // obj = JSON.parse(sessionStorage.currentUser);
    // sessionStorage.setItem('currentUser', obj)
    console.log(details);
    console.log(user);
    // history.push('/home')
    setLogin(!isLoggedIn)
    window.location.reload()
    
    // return <Home />
    
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
    // localStorage.removeItem('currentUser')
    sessionStorage.clear()
    // setUser({username: '', email: '', password: ''})
    window.location.reload()
  }

  return (
    
    // <ActionCableProvider url='/cable'>
    <div className="App">
    {/* {console.log(user)} */}
      <Router>
      <Route exact  path='/' render={() => <Home />} >
      {(user != null) ? (
        <Home user={user} login={Login} logout={Logout} rooms={rooms} />
      ) : (
        <LoginForm user={user} Login={Login} error={error} />
      )}
      </Route>
      <Route exact path='/signup'>
        <RegistrationForm SignUp={SignUp} />
      </Route>
      <Route path='/home'>
        <Home user={user}  login={Login} logout={Logout} rooms={rooms} />
      </Route>
      </Router>
    </div>
    // </ActionCableProvider>
  );
}

export default App;
