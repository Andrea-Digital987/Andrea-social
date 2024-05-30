import React, { useContext } from 'react'
import './style.css'
import { SocialContext } from '../context/SocialContext';
import { TSocialContext } from '../Utils/commonTypes';
import CardPost from '../molecules/cardPost/CardPost';

function Home() {
  const {postsFetched} = useContext(SocialContext)as TSocialContext
  
  return (
    <section className='home-page'>
        {postsFetched?.posts && postsFetched?.posts.map((item ,index)=>(
          <CardPost key={index} item={item}/>
        ))}
    </section>
  )
}

export default Home