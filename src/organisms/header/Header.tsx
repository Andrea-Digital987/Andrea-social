import React from 'react'
import './style.css'
import Logo from '../../atoms/logo/Logo'
import RightBar from '../../molecules/rightbar/RightBar'
import { AnimatePresence } from 'framer-motion'
import InsertCard from '../../molecules/insertCard/InsertCard'

function Header() {
  
  return (
      <header className='main-header'>
          <div className='box-logo'><Logo/></div>
          <AnimatePresence>
            <InsertCard />
          </AnimatePresence>
          <RightBar />
      </header>

  )
}

export default Header