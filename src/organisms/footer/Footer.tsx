import React from 'react'
import  './style.css'

function Footer() {
  return (
    <footer className='footer'>
        <p>&copy;- {new Date().getFullYear()} Va'zapp - marchio registrato<br/>
        realizzato da Andrea Di Pasquale</p>
    </footer>
  )
}

export default Footer