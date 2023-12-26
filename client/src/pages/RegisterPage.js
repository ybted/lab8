import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import resgisterServices from '../services/resgister'
import RegisterForm from '../components/RegisterForm'
import styles from '../styles/LoginPage.module.css'
const RegisterPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const user = await resgisterServices.register({
        username, password
      })
      console.log(user)
      setUsername('')
      setPassword('')
      navigate('/login')
    } catch(exception) {
      console.log('Wrong credentials')
    }
  }

  return (
    <div className={styles.container}>
      <RegisterForm className={styles.LoginForm}
        handleSubmit={handleRegister}
        handleUsernameChange={({ target }) => setUsername(target.value)}
        handlePasswordChange={({ target }) => setPassword(target.value)}
        username={username}
        password={password}
      />
    </div>
  )
}

export default RegisterPage