import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import musicServices from '../services/music'
import MusicForm from '../components/MusicForm'
import styles from '../styles/LoginPage.module.css'

const CreatePage = () => {
  const [musicname, setMusicname] = useState('')
  const [authorname, setAuthorname] = useState('')
  const [imagelink, setImagelink] = useState('')
  const [musiclink, setMusiclink] = useState('')
  
  const navigate = useNavigate()

  const handleCreate = async (e) => {
    e.preventDefault()
    try {
      const music = await musicServices.create({
        musicname, authorname, imagelink, musiclink
      })
      console.log(music)
      setMusicname('')
      setAuthorname('')
      setImagelink('')
      setMusiclink('')
      navigate('/home')
    } catch(exception) {
      console.log('Wrong credentials')
    }
  }

  

  return (
    <div className={styles.container}>
      <MusicForm className={styles.LoginForm}
        handleSubmit={handleCreate}
        handleMusicnameChange={({ target }) => setMusicname(target.value)}
        handleAuthornameChange={({ target }) => setAuthorname(target.value)}
        handleMusicLinkChange={({ target }) => setMusiclink(target.value)}
        handleImageChange={({ target }) => setImagelink(target.value)}
        musicname={musicname}
        authorname={authorname}
        imagelink={imagelink}
        musiclink={musiclink}
      />
    </div>
  )
}

export default CreatePage