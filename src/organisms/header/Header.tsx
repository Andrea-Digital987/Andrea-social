import React, { useContext } from 'react'
import './style.css'
import Logo from '../../atoms/logo/Logo'
import RightBar from '../../molecules/rightbar/RightBar'
import { InsertWindowContext} from '../../context/InsertWindowContext'
import InsertCard from '../../molecules/insertCard/InsertCard'
import { TInsertContext } from '../../Utils/commonTypes'
function Header() {
  const {opened , setOpened} =useContext(InsertWindowContext) as TInsertContext
  return (
      <header className='main-header'>
          <div className='box-logo'><Logo/></div>
          <InsertCard  />
          <RightBar />
      </header>

  )
}

export default Header