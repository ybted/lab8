import { useState } from 'react'
import loginServices from './services/login'
import LoginForm from './components/LoginForm'
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
} from 'react-router-dom'
import Music from './components/Music'
import About from './components/About'
import photo1 from './1.jpg'
import photo2 from './2.jpg'

const MusicList = ({musics}) => (
  <div>
    <h2>Musics</h2>
      <ul>
      {musics.map(music => 
        <Music 
          key={music.id}
          music={music}
        />)}
      </ul>
  </div>
)


const App = () => {
  const [musics, setMusics] = useState([
    {
      name: "Alone in Kyoto",
      author: "Air",
      link: "https://music.163.com/#/song?id=22263852",
      photo: photo1
    },
    {
      name: "UNDER THE TREE",
      author: "SiM",
      link: "https://music.163.com/#/song?id=2024003307",
      photo: photo2
    }
  ])

  const [username, setUsername] = useState('')
  const [password, setPass] = useState('')
  const [user, setUser] = useState(null)

  const padding = {
    padding: 5
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submit!")
  }

  return (
    <Router>
      <div>
        <Link style={padding} to="/" >home</Link>
        <Link style={padding} to="/about">about</Link>
        <Link style={padding} to="/musics">musics </Link>
      </div>
        
      <div>
        <Routes>
          <Route path="/" element={<LoginForm 
            handleSubmit={handleSubmit} 
            handleUsernameChange={setUsername}
            handlePasswordChange={setPass}
            username={username}
            password={password}
            />} 
          />
          <Route path="/about" element={<About />} />
          <Route path="/musics" element={<MusicList musics={musics} />} /> 
        </Routes>  
      </div>

      <div>
        <i>Music platform, Department of Computer Science 2023</i>
      </div>
    </Router>
  )
}




export default App;
