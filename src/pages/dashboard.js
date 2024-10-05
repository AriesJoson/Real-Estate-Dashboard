import React from 'react'
import Menu from '../components/Menu'
import Analytics from '../components/analytics'
import PropertyList from '../components/table'
import '../css/dashboard.css'

function Dashboard() {
  return (
    <div className='dashboard-container'>
      <Menu />
      <div className='dashboard-contents'>
        <Analytics />
        <PropertyList />
        <br/>
        <br/>
        <br/>
      </div>
    </div>
  )
}

export default Dashboard