import musicServices from '../services/music'
import likeServices from '../services/like'
import styles from '../styles/HomePage.module.css'
import { useState } from 'react'
const Music = ({music, checkButton, handleDelete}) => {
  const newobject = {
    ...music,
    checked: true
  }
  const [ps, Setps] = useState(music.checked ? "已通过" : "通过")
 
  const butt_p = (checkButton == "start" )
    ? <button onClick={()=>{
        musicServices.update(music.musicid, newobject)
        Setps('已通过')
      }}>
      {ps}
      </button> : ""
  const butt_d = (checkButton == "start" )
    ? <button onClick={()=>{
        handleDelete(music.musicid)
      }}>
      删除
      </button> : ""
  const butt_k = (checkButton == "close")
    ? <button onClick={() => {likeServices.create(music.musicid)}}>
        收藏
      </button> : ""
  return (
    <div className={styles.card}> 
      <p>{music.musicname}</p>
      
      <p>作者: {music.authorname}</p>
      <a href={music.musiclink}>歌曲链接</a>
      <br></br>
      {butt_p} {butt_d} {butt_k}
      {/* <button onClick={likeSubmit}></button> */}
      
      <img src={music.imagelink} alt="no photo" /> 
   </div>
  )
}
  



export default Music