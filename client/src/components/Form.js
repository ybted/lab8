import PropTypes from 'prop-types'
import styles from '../styles/LoginPage.module.css'

const Form = ({
  handleSubmit,
  handleUsernameChange,
  handlePasswordChange,
  username,
  password,
  name
}) => (
  <form onSubmit={handleSubmit}>
    <h2 className={styles.title}>{name}</h2>
    <div>
      username
      <input
        type="text"
        value={username}
        name="Username"
        onChange={handleUsernameChange}
        id='username'
      />
    </div>
    <div>
      password
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
        {name}
      </button>
    </div>
  </form>
)

Form.prototype = {
  handleSubmit: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

export default Form