const Music = ({music, likeSubmit}) => {
  return (
    <li> 
      <br></br>
      Name: {music.musicname} <br></br>
      Author: {music.authorname} <br></br>
      Link: {music.musiclink} <br></br>
      Likes: {music.likes} 
      {/* <button onClick={likeSubmit}></button> */}
      <br></br>
      <img src={music.imagelink} alt="no photo" /> 
   </li>
  )
}
  



export default Music