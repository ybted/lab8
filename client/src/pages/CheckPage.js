
import MusicList from '../components/MusicList'
import { useState, useEffect } from "react"
import musicServices from '../services/music'
import { useNavigate } from "react-router-dom"

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

  return ( 
    <div>
      <h2>adminstrate music platform</h2>
      <button onClick={() => {navigate('/login')}}>logout</button>
      <MusicList musics={musics} checkButton="start"/>
    </div>
  )
}

export default CheckPage