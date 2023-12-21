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
        console.log(res.content)
        console.log('Promise fulfilled')
        setMusics(res.content)
      })
  }, [])
  const create = (e) => {
    e.preventDefault()
    navigate('/create')
  }

  return ( 
    <div>
      <h2>about music platform</h2>
      <MusicList musics={musics}/>
      <form onSubmit={create}>
        <button id='register-button' type="submit">create new music</button>
      </form>
    </div>
  )
}

export default HomePage