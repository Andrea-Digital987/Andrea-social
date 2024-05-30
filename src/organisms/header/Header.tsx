import React from 'react'
import './style.css'
import Logo from '../../atoms/logo/Logo'
import RightBar from '../../molecules/rightbar/RightBar'

import InsertCard from '../../molecules/insertCard/InsertCard'

function Header() {
  
  return (
      <header className='main-header'>
          <div className='box-logo'><Logo/></div>
          <InsertCard />
          <RightBar />
      </header>

  )
}

export default Header