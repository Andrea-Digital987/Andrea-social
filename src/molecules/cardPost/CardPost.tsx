import React from 'react'
import './style.css'
import { TPost } from '../../Utils/commonTypes'
import LikeBox from '../likeBox/LikeBox'
function CardPost({item}: {item: TPost}) {
  return (
    <div className='card-post'>
        <section className='inner-card'>
        <h3>{item?.title}</h3>
        <p>
            {item?.body}<br/>
            <em>{item?.tags}</em>
        </p>
        <div>
          <LikeBox likes={item.reactions.likes} dislikes={item.reactions.dislikes}/>
        </div>
        </section>
        
    </div>
  )
}

export default CardPost