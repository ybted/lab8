import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import resgisterServices from '../services/resgister'
import LoginForm from '../components/Form'

const RegisterPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const navigate = useNavigate()

  const handleLogin = async (e) => {
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
    <div>
      <h2>Register Page</h2>
      <LoginForm 
        handleSubmit={handleLogin}
        handleUsernameChange={({ target }) => setUsername(target.value)}
        handlePasswordChange={({ target }) => setPassword(target.value)}
        username={username}
        password={password}
        name="register"
      />
    </div>
  )
}

export default RegisterPage