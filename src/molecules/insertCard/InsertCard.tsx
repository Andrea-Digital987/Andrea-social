import React , { useContext }  from 'react'
import './style.css'
import { TInsertContext } from '../../Utils/commonTypes'
import { InsertWindowContext} from '../../context/InsertWindowContext'
import {motion} from 'framer-motion'
import FormCard from '../form/FormCard'
function InsertCard() {
  const {opened , setOpened} =useContext(InsertWindowContext) as TInsertContext
  const variants = {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.3,
      },
    },
    hide: {
      opacity: 0,
    },
  };
  return (
    <motion.div
      variants={variants}
      animate={opened ? 'hide' : 'show'} 
      className='card-insert'>
      <FormCard/>
    </motion.div>
  )
}

export default InsertCard