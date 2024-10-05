import React from 'react'
import '../css/menu.css'

function Menu() {
  return (
    <div className='menu-container'>
      <div className='menu-box'>
        <div className='menu-header'>
          <h1 className='menu-title'>Dashboard</h1>
        </div>
        <div className='menus'>
          <div className='menu-items'>
            <i className='bx bxs-bell'></i>
          </div>
          <div className='menu-items'>
            <i className='bx bxs-help-circle' ></i>
          </div>
          <div className='menu-items'>
            <i className='bx bxs-user-circle' ></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu