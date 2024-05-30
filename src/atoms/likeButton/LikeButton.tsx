import React from 'react'
import './style.css'
import { AiTwotoneLike } from "react-icons/ai";
function LikeButton({likes , click}: {likes: number , click : Function}) {
  return (
    <div className='button-like' onClick={()=>click(likes+1)}>
        <AiTwotoneLike style={{ fontSize : 25 , fill : 'black'}}/>
        <span>{likes}</span> 
    </div>
  )
}

export default LikeButton