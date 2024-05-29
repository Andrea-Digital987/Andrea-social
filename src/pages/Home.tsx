import React, { useContext } from 'react'
import './style.css'
import { SocialContext } from '../context/SocialContext';
import { TSocialContext } from '../Utils/commonTypes';
import CardPost from '../molecules/CardPost';

function Home() {
  const {postsFetched} = useContext(SocialContext)as TSocialContext
  console.log(postsFetched);
  return (
    <section className='home-page'>
      <h1>Posts</h1>
        {postsFetched && postsFetched?.posts.map((item ,index)=>(
          <CardPost key={index} item={item}/>
        ))}
    </section>
  )
}

export default Home