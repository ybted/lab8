
import MusicList from '../components/MusicList'
import { useState, useEffect } from "react"
import musicServices from '../services/music'
import { useNavigate } from "react-router-dom"
import styles from '../styles/HomePage.module.css'
const CheckPage = () => {
  const [musics, setMusics] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    musicServices
      .getAll()
      .then(res => {
        console.log(res)
        console.log('Promise fulfilled')
        setMusics(res.content)
      })
  }, [])

  const handledelete = (id) => {
    musicServices.remove(id)
    musicServices
      .getAll()
      .then(res => {
        console.log(res)
        console.log('Promise fulfilled')
        setMusics(res.content)
      })
  }
  return ( 
    <div className={styles.container}>
      <h2 className={styles.h2}> 管理音乐 </h2>
      <button onClick={() => {navigate('/login')}}>登出</button>
      <MusicList 
        musics={musics} 
        checkButton="start"
        handleDelete={handledelete}
      />
    </div>
  )
}

export default CheckPage