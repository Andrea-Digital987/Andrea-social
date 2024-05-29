import React, { useContext } from 'react'
import './style.css'
import { SocialContext } from '../../context/SocialContext'
import LikeButton from '../../atoms/likeButton/LikeButton'
import DislikeButton from '../../atoms/dislikeButton/DislikeButton'
function LikeBox({likes , dislikes} : {likes: number, dislikes : number}) {
  return (
    <div className='like-box'>
        <LikeButton likes={likes}/>
        <DislikeButton dislikes={dislikes}/>
    </div>
  )
}

export default LikeBox