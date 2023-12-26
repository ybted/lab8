import PropTypes from 'prop-types'
import { Form } from 'react-router-dom'
import styles from '../styles/LoginPage.module.css'
import { useNavigate } from 'react-router-dom'
const MusicForm = ({
  handleSubmit,
  handleMusicnameChange,
  handleAuthornameChange,
  handleImageChange,
  handleMusicLinkChange,
  musicname, 
  authorname,
  imagelink,
  musiclink
}) => {
  const navigate = useNavigate()
  const back = (e) => {
    e.preventDefault()
    navigate('/home')
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>创建新的音乐</h2>
      <div>
        音乐名
        <input 
          type='text'
          value={musicname}
          name="Musicname"
          onChange={handleMusicnameChange}
          id="musicname"
        />
      </div>
      <div>
        作者名
        <input 
          type='text'
          value={authorname}
          name="Authorname"
          onChange={handleAuthornameChange}
          id="authorname"
        />
      </div>
      <div>
        音乐封面
        <input 
          type='text'
          value={imagelink}
          name="Imagelink"
          onChange={handleImageChange}
        />
      </div>
      <div>
        音乐链接
        <input 
          type="text"
          value={musiclink}
          name="Musiclink"
          onChange={handleMusicLinkChange}
        />
      </div>
      <button id='create-button' type='submit'>提交</button>
      <button onClick={back}>返回</button>
    </form>
  )
}

Form.prototype = {
  handleSubmit: PropTypes.func.isRequired,
  handleMusicnameChange: PropTypes.func.isRequired,
  handleAuthornameChange: PropTypes.func.isRequired,
  handleImageChange: PropTypes.func.isRequired,
  handleMusicLinkChange: PropTypes.func.isRequired,
  musicname: PropTypes.string.isRequired,
  authorname: PropTypes.string.isRequired,
  imagelink: PropTypes.string.isRequired,
  musiclink: PropTypes.string.isRequired
}

export default MusicForm