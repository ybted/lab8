import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import loginservices from '../services/login'
import LoginForm from '../components/Form'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import RegisterPage  from './RegisterPage'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const user = await loginservices.login({
        username, password
      })
      console.log(user)
      setUsername('')
      setPassword('')
      navigate('/home')
    } catch(exception) {
      console.log('Wrong credentials')
    }
  }

  const register = (e) => {
    e.preventDefault()
    navigate('/register')
  }

  return (
    <div>
      <h2>Login Page</h2>
      <LoginForm 
        handleSubmit={handleLogin}
        handleUsernameChange={({ target }) => setUsername(target.value)}
        handlePasswordChange={({ target }) => setPassword(target.value)}
        username={username}
        password={password}
        name="login"
      />
      <form onSubmit={register}>
        <button id='register-button' type="submit">register</button>
      </form>
    </div>
  )
}

export default LoginPage