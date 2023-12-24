import Music from "./Music"

const MusicList = ({musics, checkButton}) => (
  <div>
    <h2>Musics</h2>
      <ul>
      {musics.map(music => 
        <Music 
          key={music.musicid}
          music={music}
          checkButton={checkButton}
        />)}
      </ul>
  </div>
)

export default MusicList