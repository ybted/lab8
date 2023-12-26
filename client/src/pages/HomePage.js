import { Link } from "react-router-dom"
import MusicList from '../components/MusicList'
import { useState, useEffect } from "react"
import musicServices from '../services/music'
import { Navigate, useNavigate } from "react-router-dom"
import styles from '../styles/HomePage.module.css'
const HomePage = () => {
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
  const create = (e) => {
    e.preventDefault()
    navigate('/create')
  }

  const back = () => {
    musicServices
      .getAll()
      .then(res => {
        setMusics(res.content)
      })
  }

  const handleLike = () => {
    musicServices
      .getLike()
      .then(res => {
        setMusics(res.content)
      })
  }


  return ( 
    <div className={styles.container}>
      <h1>123音乐平台</h1>
      <button  onClick={() => {navigate('/login')}}> 登出 </button> <br></br>
      <button onClick={handleLike}> 已收藏 </button>
      <MusicList musics={musics} checkButton="close" />
      <form onSubmit={create}>
        <button id='register-button' type="submit">上传新音乐</button>
      </form>
      <button onClick={back}>返回</button>
    </div>
  )
}

export default HomePage