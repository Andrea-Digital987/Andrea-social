import React, { useContext, useEffect } from 'react'
import Header from '../organisms/header/Header'
import Main from '../organisms/main/Main'
import './style.css'
import Footer from '../organisms/footer/Footer'
import { fetchData } from '../Utils/utilities'
import { SocialContext } from '../context/SocialContext'
import { TSocialContext } from '../Utils/commonTypes'


function Layout() {
  const {setPostsFetched} = useContext(SocialContext) as TSocialContext;
  useEffect(()=>{
    fetchData(setPostsFetched)
  }
  ,[])
  return (
    <div className='main-wrapper'>
      <Header/>
        <Main/>
      <Footer/>
    </div>
  )
}

export default Layout