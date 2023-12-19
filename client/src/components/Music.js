const Music = ({music}) => (
  <li> <br></br>
    Name: {music.name} <br></br>
    Author: {music.author} <br></br>
    Link: {music.link} <br></br>
    <img src={music.photo} alt="no photo" /> 
  </li>
)


export default Music