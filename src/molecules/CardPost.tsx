import React from 'react'
import './style.css'
import { TPost } from '../Utils/commonTypes'
function CardPost({item}: {item: TPost}) {
  return (
    <div className='card-post'>
        <section>
        <h3>{item.title}</h3>
        <p>
            {item.body}<br/>
            <em>{item.tags}</em>
        </p>
        
        </section>
        
    </div>
  )
}

export default CardPost