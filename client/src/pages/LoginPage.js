import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import loginservices from '../services/login'
import LoginForm from '../components/LoginForm'
import styles from '../styles/LoginPage.module.css'

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
      console.log(user.data.username)
      setUsername('')
      setPassword('')
      if (user.data.username === "admin")
        navigate('/check')
      else 
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
    <div className={styles.container}>
      <LoginForm className={styles.LoginForm}
        handleSubmit={handleLogin}
        handleUsernameChange={({ target }) => setUsername(target.value)}
        handlePasswordChange={({ target }) => setPassword(target.value)}
        username={username}
        password={password}
      />
    </div>
  )
}

export default LoginPage