import React from 'react'
import Sidebar from './Sidebar'
import './MainBody.css'
import Products from './Products'

function MainBody() {
  
  return (
    <div className='mainBody'>
        <Sidebar />
        <Products />
    </div>
  )
}

export default MainBody