import musicServices from '../services/music'
import likeServices from '../services/like'
const Music = ({music, checkButton}) => {
  const newobject = {
    ...music,
    checked: true
  }
  const butt_p = (checkButton == "start" )
    ? <button onClick={()=>{musicServices.update(music.musicid, newobject)}}>
      {music.checked ? "have passed" : "pass"}
      </button> : ""
  const butt_d = (checkButton == "start" )
    ? <button onClick={()=>{musicServices.remove(music.musicid, newobject)}}>
      delete
      </button> : ""
  const butt_k = (checkButton == "close")
    ? <button onClick={() => {likeServices.create(music.musicid)}}>
        like
      </button> : ""
  return (
    <li> 
      <br></br>
      Name: {music.musicname} <br></br>
      Author: {music.authorname} <br></br>
      Link: {music.musiclink} <br></br>
      
      {butt_p} {butt_d} {butt_k}
      {/* <button onClick={likeSubmit}></button> */}
      <br></br>
      <img src={music.imagelink} alt="no photo" /> 
   </li>
  )
}
  



export default Music