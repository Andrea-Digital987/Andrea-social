import React, { useContext, useState } from 'react'
import './style.css'

import LikeButton from '../../atoms/likeButton/LikeButton'
import DislikeButton from '../../atoms/dislikeButton/DislikeButton'
function LikeBox({likes , dislikes} : {likes: number, dislikes : number}) {
  const [likesState , setLikesState] = useState<number>(likes)
  const [disLikesState , setDisLikesState] = useState<number>(dislikes)
  return (
    <div className='like-box'>
        <LikeButton likes={likesState} click={setLikesState}/>
        <DislikeButton dislikes={disLikesState} click={setDisLikesState}/>
    </div>
  )
}

export default LikeBox