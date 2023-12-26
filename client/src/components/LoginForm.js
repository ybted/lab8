import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/LoginPage.module.css'

const LoginForm = ({
  handleSubmit,
  handleUsernameChange,
  handlePasswordChange,
  username,
  password,
}) => {
  const navigate = useNavigate()
  const register = (e) => {
    e.preventDefault()
    navigate('/register')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>登录</h2>
      <div>
        用户名
        <input
          type="text"
          value={username}
          name="Username"
          onChange={handleUsernameChange}
          id='username'
        />
      </div>
      <div>
        密码
        <input
          id='password'
          type="password"
          value={password}
          name="Password"
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <button id='login-button' type="submit">
          登录
        </button>
      </div>
        <button onClick={register}>
          注册新用户
        </button>
    </form>
  )
}
  

LoginForm.prototype = {
  handleSubmit: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

export default LoginForm