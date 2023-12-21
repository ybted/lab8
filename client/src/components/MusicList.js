import Music from "./Music"

const MusicList = ({musics}) => (
  <div>
    <h2>Musics</h2>
      <ul>
      {musics.map(music => 
        <Music 
          key={musics.indexOf(music)}
          music={music}
        />)}
      </ul>
  </div>
)

export default MusicList