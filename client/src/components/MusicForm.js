import PropTypes from 'prop-types'
import { Form } from 'react-router-dom'

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
}) => (
  <form onSubmit={handleSubmit}>
    <div>
      music name
      <input 
        type='text'
        value={musicname}
        name="Musicname"
        onChange={handleMusicnameChange}
        id="musicname"
      />
    </div>
    <div>
      author name
      <input 
        type='text'
        value={authorname}
        name="Authorname"
        onChange={handleAuthornameChange}
        id="authorname"
      />
    </div>
    <div>
      image link
      <input 
        type='text'
        value={imagelink}
        name="Imagelink"
        onChange={handleImageChange}
      />
    </div>
    <div>
      music link
      <input 
        type="text"
        value={musiclink}
        name="Musiclink"
        onChange={handleMusicLinkChange}
      />
    </div>
    <button id='create-button' type='submit'>create</button>
  </form>
)

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