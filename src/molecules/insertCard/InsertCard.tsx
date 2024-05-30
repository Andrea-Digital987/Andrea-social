import React , { useContext }  from 'react'
import './style.css'
import { TInsertContext } from '../../Utils/commonTypes'
import { InsertWindowContext} from '../../context/InsertWindowContext'
import {motion , AnimatePresence , useIsPresent} from 'framer-motion'
import FormCard from '../form/FormCard'
function InsertCard() {
  const {opened , setOpened} =useContext(InsertWindowContext) as TInsertContext
  const isPresent = useIsPresent();
  const variants = {
    show: {
      opacity: 1,
      height: 500,
      transition: {
        ease: 'easeOut',
        duration: 0.3,
      },
    },
    hide: {
      opacity: 0,
      height:0
    },
  };
 return (
      <motion.div
        variants={variants}
        animate={opened ? 'show' : 'hide'} 
        className='card-insert'>
        <FormCard display={isPresent}/>
      </motion.div>
    
  )

}

export default InsertCard