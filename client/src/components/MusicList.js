import Music from "./Music"
import styles from '../styles/HomePage.module.css'
const MusicList = ({musics, checkButton, handleDelete}) => {

  return (
    <div>
      <h2>音乐</h2>
        <div className={styles.card_container}>
        {musics.map(music => 
          <Music 
            key={music.musicid}
            music={music}
            checkButton={checkButton}
            handleDelete={handleDelete}
          />)}
        </div>
    </div>
  )
}
  

export default MusicList