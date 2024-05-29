import React from 'react'
import './style.css'
import Aside from '../aside/Aside'
import Home from '../../pages/Home'
function Main() {
  return (
    <main className='main-section'>
        <Aside/>
        <Home/>
    </main>
  )
}

export default Main