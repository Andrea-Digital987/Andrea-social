import React, { useContext, useEffect } from 'react'
import Header from '../organisms/header/Header'
import Main from '../organisms/main/Main'
import './style.css'
import Footer from '../organisms/footer/Footer'
import { fetchData } from '../Utils/utilities'
import { SocialContext } from '../context/SocialContext'
import { TSocialContext } from '../Utils/commonTypes'
import { InsertWindowContextProvider } from '../context/InsertWindowContext'

function Layout() {
  const {postsFetched , setPostsFetched} = useContext(SocialContext) as TSocialContext;
  useEffect(()=>{
    if(localStorage.getItem('posts') !== null){
      setPostsFetched(JSON.parse(localStorage.getItem('posts')||""))
    }else{
      console.log('entrato else')
      fetchData(setPostsFetched)
    }
  }
  ,[])
  return (
    <div className='main-wrapper'>
      <InsertWindowContextProvider>
        <Header/>
      </InsertWindowContextProvider>
      
        <Main/>
      <Footer/>
    </div>
  )
}

export default Layout