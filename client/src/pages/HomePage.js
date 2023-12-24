import { Link } from "react-router-dom"
import MusicList from '../components/MusicList'
import { useState, useEffect } from "react"
import musicServices from '../services/music'
import { Navigate, useNavigate } from "react-router-dom"

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
    <div>
      <h2>about music platform</h2>
      <button onClick={() => {navigate('/login')}}> logout </button> <br></br>
      <button onClick={handleLike}> liked </button>
      <MusicList musics={musics} checkButton="close" />
      <form onSubmit={create}>
        <button id='register-button' type="submit">create new music</button>
      </form>
      <button onClick={back}>back</button>
    </div>
  )
}

export default HomePage