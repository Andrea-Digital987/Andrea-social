import React from 'react'
import './style.css'
import { AiTwotoneLike } from "react-icons/ai";
function LikeButton({likes}: {likes: number}) {
  return (
    <div className='button-like'>
        <AiTwotoneLike style={{ fontSize : 25 , fill : 'black'}}/>
        <span>{likes}</span> 
    </div>
  )
}

export default LikeButton