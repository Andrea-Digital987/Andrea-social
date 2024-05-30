import React, { useContext } from 'react'
import './style.css'
import { RiCloseCircleLine } from "react-icons/ri";
import { InsertWindowContext } from '../../context/InsertWindowContext';
import { TInsertContext } from '../../Utils/commonTypes';
import FormSection from './FormSection';
function FormCard({display}:{display : boolean}) {
    const {opened ,setOpened} = useContext(InsertWindowContext) as TInsertContext
  return (
    <div className={display?'form-card': 'hidden'}>
      {opened &&
        <>
          <div className='iconX-btn'>
            <RiCloseCircleLine onClick={()=>(setOpened(false))}/>
          </div>
            <FormSection/>
        </>
         }
        
    </div>
  )
}

export default FormCard