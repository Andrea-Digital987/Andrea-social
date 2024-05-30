import React, { useContext } from 'react'
import './style.css'
import { RiCloseCircleLine } from "react-icons/ri";
import { InsertWindowContext } from '../../context/InsertWindowContext';
import { TInsertContext } from '../../Utils/commonTypes';
import FormSection from './FormSection';
import { motion } from "framer-motion"
function FormCard() {
    const {setOpened} = useContext(InsertWindowContext) as TInsertContext
  return (
    <div className='form-card'>
        <div className='iconX-btn'>
            <RiCloseCircleLine onClick={()=>(setOpened(false))}/>
        </div>
        
        <FormSection/>
        
    </div>
  )
}

export default FormCard