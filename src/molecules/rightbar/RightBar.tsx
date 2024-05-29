import React, { useContext } from 'react'
import './style.css'
import { InsertWindowContext } from '../../context/InsertWindowContext'
import { TInsertContext } from '../../Utils/commonTypes'
function RightBar() {
  const {opened , setOpened} = useContext(InsertWindowContext)as TInsertContext
  return (
    <div className="right-menu">
        <button className='inserisci-btn' onClick={()=> setOpened(!opened)}>Inserisci Post</button>
    </div>
  )
}

export default RightBar